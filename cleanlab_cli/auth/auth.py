import click
from click import style
import os
import json
from cleanlab_cli.api_service import validate_api_key


class AuthConfig:
    def __init__(self):
        self.api_key = None

    def get_api_key(self):
        if self.api_key is None:
            try:
                api_key = load_api_key()
                if api_key is None or not validate_api_key(api_key):
                    raise ValueError("Invalid API key.")
                self.api_key = api_key
            except (FileNotFoundError, KeyError, ValueError):
                click.secho(
                    "No valid API key found. Run 'cleanlab auth' before running this command."
                )

    # def status(self):
    #     api_key = load_api_key()
    #     if api_key is not None:
    #         click.echo("Currently logged in!")
    #     else:
    #         click.echo("Not logged in.")


auth_config = click.make_pass_decorator(AuthConfig, ensure=True)


def construct_settings(api_key):
    return {"api_key": api_key}


def get_cleanlab_settings():
    cleanlab_dir = os.path.expanduser("~/.cleanlab/")
    settings_filepath = os.path.join(cleanlab_dir, "settings.json")
    if not os.path.exists(settings_filepath):
        raise FileNotFoundError

    with open(settings_filepath, "r") as f:
        settings = json.load(f)
    return settings


def load_api_key():
    settings = get_cleanlab_settings()
    return settings.get["api_key"]


@click.command()
@click.option(
    "--key",
    "-k",
    type=str,
    prompt=True,
    help="API key for CLI uploads. You can get this from https://app.cleanlab.ai/upload.",  # TODO revise url
)
def auth(api_key):
    cleanlab_dir = os.path.expanduser("~/.cleanlab/")
    if not os.path.exists(cleanlab_dir):
        os.mkdir(cleanlab_dir)

    # validate API key
    valid_key = validate_api_key(api_key)
    if not valid_key:
        raise click.ClickException(
            style(
                "API key is invalid. Check https://app.cleanlab.ai/upload for your current API"
                " key.",  # TODO
                fg="red",
            )
        )

    # save API key
    settings_filepath = os.path.join(cleanlab_dir, "settings.json")
    if os.path.exists(settings_filepath):
        try:
            with open(settings_filepath, "r") as f:
                settings = json.load(f)
                settings["api_key"] = api_key
        except json.decoder.JSONDecodeError:
            click.secho(
                style(
                    "CLI settings are corrupted and could not be read. ",
                    fg="red",
                )
            )
            overwrite = click.prompt(
                "Would you like to create a new settings file with the provided API key?",
                type=click.Choice(["y", "n"]),
                show_choices=True,
            )
            if overwrite == "y":
                settings = construct_settings(api_key)
            elif overwrite == "n":
                raise click.ClickException(
                    "Settings file is corrupted, unable to authenticate. "
                    "Either re-run this command and allow a new settings file to be created, "
                    f"or manually fix the settings file at {settings_filepath}"
                )
    else:
        settings = construct_settings(api_key)

    with open(settings_filepath, "w") as f:
        json.dump(settings, f)

    click.secho(f"API key is valid. API key stored in {cleanlab_dir}.")
