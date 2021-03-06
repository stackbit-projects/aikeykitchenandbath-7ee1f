export default {
    "type": "document",
    "name": "config",
    "title": "Site Configuration",
    "fields": [
        {
            "type": "string",
            "name": "title",
            "title": "Title",
            "description": "Site title",
            "validation": Rule => Rule.required()
        },
        {
            "type": "string",
            "name": "path_prefix",
            "title": "Base URL",
            "description": "The base URL of this site. Useful for sites hosted under specific path, e.g.: https://www.example.com/my-site/",
            "hidden": true,
            "validation": Rule => Rule.required()
        },
        {
            "type": "string",
            "name": "description",
            "title": "Site Description",
            "description": "The default site description used in meta data.",
            "validation": null
        },
        {
            "type": "string",
            "name": "layout_style",
            "title": "Layout Style",
            "description": "The style of the theme layout.",
            "initialValue": "simple",
            "validation": null,
            "options": {
                "list": [
                    "simple",
                    "overflow"
                ]
            }
        },
        {
            "type": "string",
            "name": "palette",
            "title": "Color Palette",
            "description": "The color palette used for the site.",
            "initialValue": "green",
            "validation": null,
            "options": {
                "list": [
                    "blue",
                    "green",
                    "orange",
                    "violet"
                ]
            }
        },
        {
            "type": "header",
            "name": "header",
            "title": "Header Configuration",
            "validation": null
        },
        {
            "type": "footer",
            "name": "footer",
            "title": "Footer Configuration",
            "validation": null
        },
        {
            "type": "string",
            "name": "stackbit_file_path",
            "title": "Site Configuration File Path",
            "description": "The file path of the file that stores this data",
            "hidden": false,
            "validation": Rule => Rule.required(),
            "options": {
                "list": [
                    "content/data/config.json"
                ]
            }
        },
        {
            "type": "string",
            "name": "stackbit_model_type",
            "title": "Stackbit Model Type",
            "description": "Stackbit model type",
            "hidden": false,
            "validation": Rule => Rule.required(),
            "options": {
                "list": [
                    "data"
                ]
            }
        }
    ],
    "singleInstance": true,
    "preview": {
        "select": {
            "title": "title"
        }
    }
}