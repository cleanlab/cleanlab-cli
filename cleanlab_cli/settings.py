import json
import os
from typing import Dict, Optional
from config import PACKAGE_VERSION


class CleanlabSettings:
    def __init__(self, version: str, api_key: Optional[str]):
        self.version = version
        self.api_key = api_key

    @staticmethod
    def init_base():
        return CleanlabSettings(version=PACKAGE_VERSION, api_key=None)

    @staticmethod
    def from_dict(d):
        return CleanlabSettings(
            version=d.get("version", None),
            api_key=d.get("api_key", None),
        )

    def to_dict(self):
        return dict(version=self.version, api_key=self.api_key)

    @staticmethod
    def get_cleanlab_dir():
        XDG_CONFIG_HOME = os.environ.get("XDG_CONFIG_HOME", None)
        CONFIG_HOME = XDG_CONFIG_HOME if XDG_CONFIG_HOME else os.environ.get("HOME")
        cleanlab_dir = os.path.expanduser(os.path.join(CONFIG_HOME, ".cleanlab"))
        return cleanlab_dir

    @staticmethod
    def get_settings_filepath():
        return os.path.join(CleanlabSettings.get_cleanlab_dir(), "settings.json")

    @staticmethod
    def init_cleanlab_dir():
        """
        Initializes a cleanlab config directory if one does not currently exist. No-op if one already exists.
        :return:
        """
        cleanlab_dir = CleanlabSettings.get_cleanlab_dir()
        os.makedirs(cleanlab_dir, exist_ok=True)

    @staticmethod
    def init_cleanlab_settings():
        """
        Initializes and saves a base Cleanlab settings file. No-op if one already exists.
        :return:
        """
        CleanlabSettings.init_cleanlab_dir()
        settings_filepath = CleanlabSettings.get_settings_filepath()
        if not os.path.exists(settings_filepath):
            base = CleanlabSettings.init_base()
            base.save()

    @staticmethod
    def load():
        filepath = CleanlabSettings.get_settings_filepath()
        with open(filepath, "r") as f:
            settings_dict = json.load(f)
        settings = CleanlabSettings.from_dict(settings_dict)
        settings.validate_version()
        return settings

    def update_version(self):
        self.version = PACKAGE_VERSION
        self.save()

    def validate_version(self):
        # list of sem vers for which a migration needs to be run
        MIGRATION_VERSIONS = []
        VALID_VERSIONS = [PACKAGE_VERSION]
        if self.version not in VALID_VERSIONS:
            if self.version in MIGRATION_VERSIONS:
                raise ValueError("Settings file must be migrated or re-generated.")
            else:
                raise ValueError(
                    "Unrecognized Cleanlab settings version. Settings file must be re-generated."
                )

    def save(self):
        with open(CleanlabSettings.get_settings_filepath(), "w") as f:
            json.dump(self.to_dict(), f)


def get_cleanlab_settings():
    settings_filepath = CleanlabSettings.get_settings_filepath()
    if not os.path.exists(settings_filepath):
        CleanlabSettings.init_cleanlab_settings()

    return CleanlabSettings.load()