import { CmsModelPlugin } from "@webiny/api-headless-cms/content/plugins/CmsModelPlugin";
import { CmsGroupPlugin } from "@webiny/api-headless-cms/content/plugins/CmsGroupPlugin";

export default [
    new CmsGroupPlugin({
        id: "atoms",
        name: "Atoms",
        slug: "atoms",
        icon: "",
        description: ""
    }),
    new CmsGroupPlugin({
        id: "molecules",
        name: "Molecules",
        slug: "molecules",
        icon: "",
        description: ""
    }),
    new CmsGroupPlugin({
        id: "organisms",
        name: "Organisms",
        slug: "organisms",
        icon: "",
        description: ""
    }),
    new CmsGroupPlugin({
        id: "templates",
        name: "Templates",
        slug: "templates",
        icon: "",
        description: ""
    }),
    new CmsModelPlugin({
        name: "Address",
        modelId: "address",
        description: "",
        fields: [
            {
                fieldId: "variant",
                id: "variant",
                label: "variant",
                type: "text",
                multipleValues: true,
                predefinedValues: {
                    enabled: true,
                    values: [
                        {
                            label: "cta",
                            value: "cta",
                            selected: true
                        },
                        {
                            label: "info",
                            value: "info",
                            selected: false
                        },
                        {
                            label: "default",
                            value: "default",
                            selected: false
                        },
                        {
                            label: "success",
                            value: "success",
                            selected: false
                        },
                        {
                            label: "warning",
                            value: "warning",
                            selected: false
                        },
                        {
                            label: "danger",
                            value: "danger",
                            selected: false
                        }
                    ]
                }
            }
        ],
        group: {
            id: "atoms",
            name: "atoms"
        },
        layout: [],
        locale: "en-US",
        tenant: "",
        titleFieldId: ""
    }),
    new CmsModelPlugin({
        name: "Balance",
        modelId: "balance",
        description: "",
        fields: [],
        group: {
            id: "atoms",
            name: "atoms"
        },
        layout: [],
        locale: "en-US",
        tenant: "",
        titleFieldId: ""
    }),
    new CmsModelPlugin({
        name: "Chip",
        modelId: "chip",
        description: "",
        fields: [
            {
                fieldId: "variant",
                id: "variant",
                label: "variant",
                type: "text",
                multipleValues: true,
                predefinedValues: {
                    enabled: true,
                    values: [
                        {
                            label: "cta",
                            value: "cta",
                            selected: true
                        },
                        {
                            label: "info",
                            value: "info",
                            selected: false
                        },
                        {
                            label: "success",
                            value: "success",
                            selected: false
                        },
                        {
                            label: "warning",
                            value: "warning",
                            selected: false
                        },
                        {
                            label: "danger",
                            value: "danger",
                            selected: false
                        }
                    ]
                }
            }
        ],
        group: {
            id: "atoms",
            name: "atoms"
        },
        layout: [],
        locale: "en-US",
        tenant: "",
        titleFieldId: ""
    }),
    new CmsModelPlugin({
        name: "DateText",
        modelId: "date_text",
        description: "",
        fields: [
            {
                fieldId: "time",
                id: "time",
                label: "time",
                type: "text"
            },
            {
                fieldId: "show_timestamp",
                id: "show_timestamp",
                label: "showTimestamp",
                type: "boolean"
            },
            {
                fieldId: "datetime_format",
                id: "datetime_format",
                label: "datetimeFormat",
                type: "text"
            }
        ],
        group: {
            id: "atoms",
            name: "atoms"
        },
        layout: [],
        locale: "en-US",
        tenant: "",
        titleFieldId: ""
    }),
    new CmsModelPlugin({
        name: "DropDown",
        modelId: "drop_down",
        description: "",
        fields: [
            {
                fieldId: "options",
                id: "options",
                label: "options",
                type: "text"
            },
            {
                fieldId: "selected_index",
                id: "selected_index",
                label: "selectedIndex",
                type: "number"
            },
            {
                fieldId: "drop_up",
                id: "drop_up",
                label: "dropUp",
                type: "boolean"
            },
            {
                fieldId: "disabled",
                id: "disabled",
                label: "disabled",
                type: "boolean"
            }
        ],
        group: {
            id: "atoms",
            name: "atoms"
        },
        layout: [],
        locale: "en-US",
        tenant: "",
        titleFieldId: ""
    }),
    new CmsModelPlugin({
        name: "Gauge",
        modelId: "gauge",
        description: "",
        fields: [
            {
                fieldId: "max_value",
                id: "max_value",
                label: "maxValue",
                type: "number"
            },
            {
                fieldId: "min_value",
                id: "min_value",
                label: "minValue",
                type: "number"
            },
            {
                fieldId: "value",
                id: "value",
                label: "value",
                type: "number"
            },
            {
                fieldId: "width",
                id: "width",
                label: "width",
                type: "text"
            },
            {
                fieldId: "tooltip",
                id: "tooltip",
                label: "tooltip",
                type: "boolean"
            }
        ],
        group: {
            id: "atoms",
            name: "atoms"
        },
        layout: [],
        locale: "en-US",
        tenant: "",
        titleFieldId: ""
    }),
    new CmsModelPlugin({
        name: "Icon",
        modelId: "icon",
        description: "",
        fields: [
            {
                fieldId: "name",
                id: "name",
                label: "name",
                type: "text"
            },
            {
                fieldId: "size",
                id: "size",
                label: "size",
                type: "text",
                multipleValues: true,
                predefinedValues: {
                    enabled: true,
                    values: [
                        {
                            label: "sm",
                            value: "sm",
                            selected: true
                        },
                        {
                            label: "lg",
                            value: "lg",
                            selected: false
                        },
                        {
                            label: "xl",
                            value: "xl",
                            selected: false
                        },
                        {
                            label: "xxl",
                            value: "xxl",
                            selected: false
                        },
                        {
                            label: "xxxl",
                            value: "xxxl",
                            selected: false
                        }
                    ]
                }
            },
            {
                fieldId: "variant",
                id: "variant",
                label: "variant",
                type: "text",
                multipleValues: true,
                predefinedValues: {
                    enabled: true,
                    values: [
                        {
                            label: "cta",
                            value: "cta",
                            selected: true
                        },
                        {
                            label: "info",
                            value: "info",
                            selected: false
                        },
                        {
                            label: "success",
                            value: "success",
                            selected: false
                        },
                        {
                            label: "warning",
                            value: "warning",
                            selected: false
                        },
                        {
                            label: "danger",
                            value: "danger",
                            selected: false
                        }
                    ]
                }
            },
            {
                fieldId: "tooltip",
                id: "tooltip",
                label: "tooltip",
                type: "boolean"
            },
            {
                fieldId: "viewbox",
                id: "viewbox",
                label: "viewbox",
                type: "text"
            },
            {
                fieldId: "tooltip_visible",
                id: "tooltip_visible",
                label: "tooltipVisible",
                type: "text",
                multipleValues: true,
                predefinedValues: {
                    enabled: true,
                    values: [
                        {
                            label: "sm",
                            value: "sm",
                            selected: true
                        },
                        {
                            label: "md",
                            value: "md",
                            selected: false
                        },
                        {
                            label: "lg",
                            value: "lg",
                            selected: false
                        },
                        {
                            label: "xl",
                            value: "xl",
                            selected: false
                        },
                        {
                            label: "xxl",
                            value: "xxl",
                            selected: false
                        }
                    ]
                }
            }
        ],
        group: {
            id: "atoms",
            name: "atoms"
        },
        layout: [],
        locale: "en-US",
        tenant: "",
        titleFieldId: ""
    }),
    new CmsModelPlugin({
        name: "LoadingIndicator",
        modelId: "loading_indicator",
        description: "",
        fields: [
            {
                fieldId: "variant",
                id: "variant",
                label: "variant",
                type: "text",
                multipleValues: true,
                predefinedValues: {
                    enabled: true,
                    values: [
                        {
                            label: "cta",
                            value: "cta",
                            selected: true
                        },
                        {
                            label: "info",
                            value: "info",
                            selected: false
                        },
                        {
                            label: "success",
                            value: "success",
                            selected: false
                        },
                        {
                            label: "warning",
                            value: "warning",
                            selected: false
                        },
                        {
                            label: "danger",
                            value: "danger",
                            selected: false
                        }
                    ]
                }
            },
            {
                fieldId: "duration",
                id: "duration",
                label: "duration",
                type: "text"
            }
        ],
        group: {
            id: "atoms",
            name: "atoms"
        },
        layout: [],
        locale: "en-US",
        tenant: "",
        titleFieldId: ""
    }),
    new CmsModelPlugin({
        name: "Logo",
        modelId: "logo",
        description: "",
        fields: [],
        group: {
            id: "atoms",
            name: "atoms"
        },
        layout: [],
        locale: "en-US",
        tenant: "",
        titleFieldId: ""
    }),
    new CmsModelPlugin({
        name: "ProgressBar",
        modelId: "progress_bar",
        description: "",
        fields: [
            {
                fieldId: "variant",
                id: "variant",
                label: "variant",
                type: "text",
                multipleValues: true,
                predefinedValues: {
                    enabled: true,
                    values: [
                        {
                            label: "cta",
                            value: "cta",
                            selected: true
                        },
                        {
                            label: "info",
                            value: "info",
                            selected: false
                        },
                        {
                            label: "success",
                            value: "success",
                            selected: false
                        },
                        {
                            label: "warning",
                            value: "warning",
                            selected: false
                        },
                        {
                            label: "danger",
                            value: "danger",
                            selected: false
                        }
                    ]
                }
            },
            {
                fieldId: "steps",
                id: "steps",
                label: "steps",
                type: "text"
            },
            {
                fieldId: "step",
                id: "step",
                label: "step",
                type: "text"
            }
        ],
        group: {
            id: "atoms",
            name: "atoms"
        },
        layout: [],
        locale: "en-US",
        tenant: "",
        titleFieldId: ""
    }),
    new CmsModelPlugin({
        name: "QrCode",
        modelId: "qr_code",
        description: "",
        fields: [
            {
                fieldId: "value",
                id: "value",
                label: "value",
                type: "text"
            },
            {
                fieldId: "width",
                id: "width",
                label: "width",
                type: "number"
            },
            {
                fieldId: "qr_color",
                id: "qr_color",
                label: "qrColor",
                type: "text"
            },
            {
                fieldId: "bg_color",
                id: "bg_color",
                label: "bgColor",
                type: "text"
            },
            {
                fieldId: "align",
                id: "align",
                label: "align",
                type: "text"
            }
        ],
        group: {
            id: "atoms",
            name: "atoms"
        },
        layout: [],
        locale: "en-US",
        tenant: "",
        titleFieldId: ""
    }),
    new CmsModelPlugin({
        name: "RichText",
        modelId: "rich_text",
        description: "",
        fields: [
            {
                fieldId: "markdown",
                id: "markdown",
                label: "markdown",
                type: "text"
            },
            {
                fieldId: "size",
                id: "size",
                label: "size",
                type: "text",
                multipleValues: true,
                predefinedValues: {
                    enabled: true,
                    values: [
                        {
                            label: "lg",
                            value: "lg",
                            selected: true
                        },
                        {
                            label: "xl",
                            value: "xl",
                            selected: false
                        },
                        {
                            label: "xxl",
                            value: "xxl",
                            selected: false
                        }
                    ]
                }
            },
            {
                fieldId: "align",
                id: "align",
                label: "align",
                type: "text",
                multipleValues: true,
                predefinedValues: {
                    enabled: true,
                    values: [
                        {
                            label: "center",
                            value: "center",
                            selected: true
                        },
                        {
                            label: "right",
                            value: "right",
                            selected: false
                        }
                    ]
                }
            },
            {
                fieldId: "__CHILDREN__",
                id: "__CHILDREN__",
                label: "Nested elements",
                type: "ref",
                helpText: "Choose one or more nested models",
                multipleValues: true,
                settings: {
                    models: [
                        {
                            modelId: "accordion"
                        }
                    ]
                }
            }
        ],
        group: {
            id: "atoms",
            name: "atoms"
        },
        layout: [],
        locale: "en-US",
        tenant: "",
        titleFieldId: ""
    }),
    new CmsModelPlugin({
        name: "SkeletonLoader",
        modelId: "skeleton_loader",
        description: "",
        fields: [
            {
                fieldId: "variant",
                id: "variant",
                label: "variant",
                type: "text",
                multipleValues: true,
                predefinedValues: {
                    enabled: true,
                    values: [
                        {
                            label: "cta",
                            value: "cta",
                            selected: true
                        },
                        {
                            label: "info",
                            value: "info",
                            selected: false
                        },
                        {
                            label: "default",
                            value: "default",
                            selected: false
                        },
                        {
                            label: "success",
                            value: "success",
                            selected: false
                        },
                        {
                            label: "warning",
                            value: "warning",
                            selected: false
                        },
                        {
                            label: "danger",
                            value: "danger",
                            selected: false
                        }
                    ]
                }
            },
            {
                fieldId: "extra_small_screen_height",
                id: "extra_small_screen_height",
                label: "extraSmallScreenHeight",
                type: "number"
            },
            {
                fieldId: "small_screen_height",
                id: "small_screen_height",
                label: "smallScreenHeight",
                type: "number"
            },
            {
                fieldId: "medium_screen_height",
                id: "medium_screen_height",
                label: "mediumScreenHeight",
                type: "number"
            },
            {
                fieldId: "large_screen_height",
                id: "large_screen_height",
                label: "largeScreenHeight",
                type: "number"
            },
            {
                fieldId: "extra_large_screen_height",
                id: "extra_large_screen_height",
                label: "extraLargeScreenHeight",
                type: "number"
            },
            {
                fieldId: "jumbo_screen_height",
                id: "jumbo_screen_height",
                label: "jumboScreenHeight",
                type: "text"
            },
            {
                fieldId: "width",
                id: "width",
                label: "width",
                type: "text"
            },
            {
                fieldId: "pulse",
                id: "pulse",
                label: "pulse",
                type: "boolean"
            },
            {
                fieldId: "rounded",
                id: "rounded",
                label: "rounded",
                type: "boolean"
            }
        ],
        group: {
            id: "atoms",
            name: "atoms"
        },
        layout: [],
        locale: "en-US",
        tenant: "",
        titleFieldId: ""
    }),
    new CmsModelPlugin({
        name: "Slider",
        modelId: "slider",
        description: "",
        fields: [
            {
                fieldId: "min",
                id: "min",
                label: "min",
                type: "number"
            },
            {
                fieldId: "max",
                id: "max",
                label: "max",
                type: "number"
            },
            {
                fieldId: "value",
                id: "value",
                label: "value",
                type: "number"
            },
            {
                fieldId: "id",
                id: "id",
                label: "id",
                type: "text"
            }
        ],
        group: {
            id: "atoms",
            name: "atoms"
        },
        layout: [],
        locale: "en-US",
        tenant: "",
        titleFieldId: ""
    }),
    new CmsModelPlugin({
        name: "TextField",
        modelId: "text_field",
        description: "",
        fields: [
            {
                fieldId: "value",
                id: "value",
                label: "value",
                type: "text"
            },
            {
                fieldId: "disabled",
                id: "disabled",
                label: "disabled",
                type: "boolean"
            },
            {
                fieldId: "multiline",
                id: "multiline",
                label: "multiline",
                type: "boolean"
            },
            {
                fieldId: "placeholder",
                id: "placeholder",
                label: "placeholder",
                type: "text"
            },
            {
                fieldId: "state",
                id: "state",
                label: "state",
                type: "text",
                multipleValues: true,
                predefinedValues: {
                    enabled: true,
                    values: [
                        {
                            label: "warning",
                            value: "warning",
                            selected: true
                        },
                        {
                            label: "danger",
                            value: "danger",
                            selected: false
                        }
                    ]
                }
            },
            {
                fieldId: "id",
                id: "id",
                label: "id",
                type: "text"
            },
            {
                fieldId: "name",
                id: "name",
                label: "name",
                type: "text"
            },
            {
                fieldId: "focused",
                id: "focused",
                label: "focused",
                type: "boolean"
            }
        ],
        group: {
            id: "atoms",
            name: "atoms"
        },
        layout: [],
        locale: "en-US",
        tenant: "",
        titleFieldId: ""
    }),
    new CmsModelPlugin({
        name: "Toggle",
        modelId: "toggle",
        description: "",
        fields: [
            {
                fieldId: "variant",
                id: "variant",
                label: "variant",
                type: "text",
                multipleValues: true,
                predefinedValues: {
                    enabled: true,
                    values: [
                        {
                            label: "cta",
                            value: "cta",
                            selected: true
                        },
                        {
                            label: "info",
                            value: "info",
                            selected: false
                        },
                        {
                            label: "success",
                            value: "success",
                            selected: false
                        },
                        {
                            label: "warning",
                            value: "warning",
                            selected: false
                        },
                        {
                            label: "danger",
                            value: "danger",
                            selected: false
                        }
                    ]
                }
            },
            {
                fieldId: "type",
                id: "type",
                label: "type",
                type: "text",
                multipleValues: true,
                predefinedValues: {
                    enabled: true,
                    values: [
                        {
                            label: "radio",
                            value: "radio",
                            selected: true
                        }
                    ]
                }
            },
            {
                fieldId: "name",
                id: "name",
                label: "name",
                type: "text"
            },
            {
                fieldId: "checked",
                id: "checked",
                label: "checked",
                type: "boolean"
            },
            {
                fieldId: "id",
                id: "id",
                label: "id",
                type: "text"
            },
            {
                fieldId: "value",
                id: "value",
                label: "value",
                type: "boolean"
            },
            {
                fieldId: "group",
                id: "group",
                label: "group",
                type: "boolean"
            },
            {
                fieldId: "disabled",
                id: "disabled",
                label: "disabled",
                type: "boolean"
            },
            {
                fieldId: "selected",
                id: "selected",
                label: "selected",
                type: "boolean"
            },
            {
                fieldId: "on_icon",
                id: "on_icon",
                label: "onIcon",
                type: "text"
            },
            {
                fieldId: "off_icon",
                id: "off_icon",
                label: "offIcon",
                type: "text"
            }
        ],
        group: {
            id: "atoms",
            name: "atoms"
        },
        layout: [],
        locale: "en-US",
        tenant: "",
        titleFieldId: ""
    }),
    new CmsModelPlugin({
        name: "TruncateText",
        modelId: "truncate_text",
        description: "",
        fields: [
            {
                fieldId: "width",
                id: "width",
                label: "width",
                type: "text",
                multipleValues: true,
                predefinedValues: {
                    enabled: true,
                    values: [
                        {
                            label: "half",
                            value: "half",
                            selected: true
                        },
                        {
                            label: "quarter",
                            value: "quarter",
                            selected: false
                        }
                    ]
                }
            },
            {
                fieldId: "title",
                id: "title",
                label: "title",
                type: "text"
            },
            {
                fieldId: "text",
                id: "text",
                label: "text",
                type: "text"
            }
        ],
        group: {
            id: "atoms",
            name: "atoms"
        },
        layout: [],
        locale: "en-US",
        tenant: "",
        titleFieldId: ""
    }),

    new CmsModelPlugin({
        name: "Alert",
        modelId: "alert",
        description: "",
        fields: [
            {
                fieldId: "value",
                id: "value",
                label: "value",
                type: "boolean"
            },
            {
                fieldId: "id",
                id: "id",
                label: "id",
                type: "text"
            },
            {
                fieldId: "dismissable",
                id: "dismissable",
                label: "dismissable",
                type: "boolean"
            },
            {
                fieldId: "variant",
                id: "variant",
                label: "variant",
                type: "text",
                multipleValues: true,
                predefinedValues: {
                    enabled: true,
                    values: [
                        {
                            label: "warning",
                            value: "warning",
                            selected: true
                        },
                        {
                            label: "danger",
                            value: "danger",
                            selected: false
                        }
                    ]
                }
            },
            {
                fieldId: "modal",
                id: "modal",
                label: "modal",
                type: "boolean"
            },
            {
                fieldId: "__CHILDREN__",
                id: "__CHILDREN__",
                label: "Nested elements",
                type: "ref",
                helpText: "Choose one or more nested models",
                multipleValues: true,
                settings: {
                    models: [
                        {
                            modelId: "icon"
                        }
                    ]
                }
            }
        ],
        group: {
            id: "molecules",
            name: "molecules"
        },
        layout: [],
        locale: "en-US",
        tenant: "",
        titleFieldId: ""
    }),
    new CmsModelPlugin({
        name: "Breadcrumb",
        modelId: "breadcrumb",
        description: "",
        fields: [
            {
                fieldId: "href",
                id: "href",
                label: "href",
                type: "text"
            }
        ],
        group: {
            id: "molecules",
            name: "molecules"
        },
        layout: [],
        locale: "en-US",
        tenant: "",
        titleFieldId: ""
    }),
    new CmsModelPlugin({
        name: "Button",
        modelId: "button",
        description: "",
        fields: [
            {
                fieldId: "id",
                id: "id",
                label: "id",
                type: "text"
            },
            {
                fieldId: "value",
                id: "value",
                label: "value",
                type: "boolean"
            },
            {
                fieldId: "variant",
                id: "variant",
                label: "variant",
                type: "text",
                multipleValues: true,
                predefinedValues: {
                    enabled: true,
                    values: [
                        {
                            label: "cta",
                            value: "cta",
                            selected: true
                        },
                        {
                            label: "info",
                            value: "info",
                            selected: false
                        },
                        {
                            label: "success",
                            value: "success",
                            selected: false
                        },
                        {
                            label: "warning",
                            value: "warning",
                            selected: false
                        },
                        {
                            label: "danger",
                            value: "danger",
                            selected: false
                        }
                    ]
                }
            },
            {
                fieldId: "size",
                id: "size",
                label: "size",
                type: "text",
                multipleValues: true,
                predefinedValues: {
                    enabled: true,
                    values: [
                        {
                            label: "lg",
                            value: "lg",
                            selected: true
                        }
                    ]
                }
            },
            {
                fieldId: "outline",
                id: "outline",
                label: "outline",
                type: "boolean"
            },
            {
                fieldId: "circle",
                id: "circle",
                label: "circle",
                type: "boolean"
            },
            {
                fieldId: "block",
                id: "block",
                label: "block",
                type: "boolean"
            },
            {
                fieldId: "href",
                id: "href",
                label: "href",
                type: "text"
            },
            {
                fieldId: "active",
                id: "active",
                label: "active",
                type: "boolean"
            },
            {
                fieldId: "disabled",
                id: "disabled",
                label: "disabled",
                type: "boolean"
            },
            {
                fieldId: "label",
                id: "label",
                label: "label",
                type: "text"
            },
            {
                fieldId: "__CHILDREN__",
                id: "__CHILDREN__",
                label: "Nested elements",
                type: "ref",
                helpText: "Choose one or more nested models",
                multipleValues: true,
                settings: {
                    models: [
                        {
                            modelId: "icon"
                        },
                        {
                            modelId: "label"
                        }
                    ]
                }
            }
        ],
        group: {
            id: "molecules",
            name: "molecules"
        },
        layout: [],
        locale: "en-US",
        tenant: "",
        titleFieldId: ""
    }),
    new CmsModelPlugin({
        name: "Chart",
        modelId: "chart",
        description: "",
        fields: [
            {
                fieldId: "type",
                id: "type",
                label: "type",
                type: "text"
            },
            {
                fieldId: "data",
                id: "data",
                label: "data",
                type: "text"
            },
            {
                fieldId: "aspect_ratio",
                id: "aspect_ratio",
                label: "aspectRatio",
                type: "text"
            }
        ],
        group: {
            id: "molecules",
            name: "molecules"
        },
        layout: [],
        locale: "en-US",
        tenant: "",
        titleFieldId: ""
    }),
    new CmsModelPlugin({
        name: "Content",
        modelId: "content",
        description: "",
        fields: [
            {
                fieldId: "__CHILDREN__",
                id: "__CHILDREN__",
                label: "Nested elements",
                type: "ref",
                helpText: "Choose one or more nested models",
                multipleValues: true,
                settings: {
                    models: [
                        {
                            modelId: "address"
                        },
                        {
                            modelId: "detail_list"
                        },
                        {
                            modelId: "disclaimer_list"
                        },
                        {
                            modelId: "form"
                        },
                        {
                            modelId: "group"
                        },
                        {
                            modelId: "heading"
                        },
                        {
                            modelId: "qr_code"
                        },
                        {
                            modelId: "rich_text"
                        }
                    ]
                }
            }
        ],
        group: {
            id: "molecules",
            name: "molecules"
        },
        layout: [],
        locale: "en-US",
        tenant: "",
        titleFieldId: ""
    }),
    new CmsModelPlugin({
        name: "Control",
        modelId: "control",
        description: "",
        fields: [
            {
                fieldId: "type",
                id: "type",
                label: "type",
                type: "text",
                multipleValues: false,
                predefinedValues: {
                    enabled: true,
                    values: []
                }
            },
            {
                fieldId: "state",
                id: "state",
                label: "state",
                type: "text",
                multipleValues: true,
                predefinedValues: {
                    enabled: true,
                    values: [
                        {
                            label: "warning",
                            value: "warning",
                            selected: true
                        },
                        {
                            label: "danger",
                            value: "danger",
                            selected: false
                        }
                    ]
                }
            },
            {
                fieldId: "id",
                id: "id",
                label: "id",
                type: "text"
            },
            {
                fieldId: "label",
                id: "label",
                label: "label",
                type: "text"
            },
            {
                fieldId: "message",
                id: "message",
                label: "message",
                type: "text"
            },
            {
                fieldId: "width",
                id: "width",
                label: "width",
                type: "text",
                multipleValues: true,
                predefinedValues: {
                    enabled: true,
                    values: [
                        {
                            label: "half",
                            value: "half",
                            selected: true
                        },
                        {
                            label: "quarter",
                            value: "quarter",
                            selected: false
                        }
                    ]
                }
            },
            {
                fieldId: "name",
                id: "name",
                label: "name",
                type: "text"
            },
            {
                fieldId: "group",
                id: "group",
                label: "group",
                type: "boolean"
            }
        ],
        group: {
            id: "molecules",
            name: "molecules"
        },
        layout: [],
        locale: "en-US",
        tenant: "",
        titleFieldId: ""
    }),
    new CmsModelPlugin({
        name: "CtaList",
        modelId: "cta_list",
        description: "",
        fields: [
            {
                fieldId: "variant",
                id: "variant",
                label: "variant",
                type: "text",
                multipleValues: true,
                predefinedValues: {
                    enabled: true,
                    values: [
                        {
                            label: "cta",
                            value: "cta",
                            selected: true
                        },
                        {
                            label: "info",
                            value: "info",
                            selected: false
                        },
                        {
                            label: "success",
                            value: "success",
                            selected: false
                        },
                        {
                            label: "warning",
                            value: "warning",
                            selected: false
                        },
                        {
                            label: "danger",
                            value: "danger",
                            selected: false
                        }
                    ]
                }
            },
            {
                fieldId: "type",
                id: "type",
                label: "type",
                type: "text",
                multipleValues: true,
                predefinedValues: {
                    enabled: true,
                    values: [
                        {
                            label: "unordered",
                            value: "unordered",
                            selected: true
                        }
                    ]
                }
            }
        ],
        group: {
            id: "molecules",
            name: "molecules"
        },
        layout: [],
        locale: "en-US",
        tenant: "",
        titleFieldId: ""
    }),
    new CmsModelPlugin({
        name: "DetailList",
        modelId: "detail_list",
        description: "",
        fields: [
            {
                fieldId: "split",
                id: "split",
                label: "split",
                type: "text"
            },
            {
                fieldId: "__CHILDREN__",
                id: "__CHILDREN__",
                label: "Nested elements",
                type: "ref",
                helpText: "Choose one or more nested models",
                multipleValues: true,
                settings: {
                    models: [
                        {
                            modelId: "chip"
                        },
                        {
                            modelId: "group"
                        },
                        {
                            modelId: "icon"
                        },
                        {
                            modelId: "rich_text"
                        }
                    ]
                }
            }
        ],
        group: {
            id: "molecules",
            name: "molecules"
        },
        layout: [],
        locale: "en-US",
        tenant: "",
        titleFieldId: ""
    }),
    new CmsModelPlugin({
        name: "DisclaimerList",
        modelId: "disclaimer_list",
        description: "",
        fields: [
            {
                fieldId: "__CHILDREN__",
                id: "__CHILDREN__",
                label: "Nested elements",
                type: "ref",
                helpText: "Choose one or more nested models",
                multipleValues: true,
                settings: {
                    models: [
                        {
                            modelId: "heading"
                        }
                    ]
                }
            }
        ],
        group: {
            id: "molecules",
            name: "molecules"
        },
        layout: [],
        locale: "en-US",
        tenant: "",
        titleFieldId: ""
    }),
    new CmsModelPlugin({
        name: "FileUpload",
        modelId: "file_upload",
        description: "",
        fields: [
            {
                fieldId: "id",
                id: "id",
                label: "id",
                type: "text"
            },
            {
                fieldId: "name",
                id: "name",
                label: "name",
                type: "text"
            },
            {
                fieldId: "uploaded",
                id: "uploaded",
                label: "uploaded",
                type: "boolean"
            }
        ],
        group: {
            id: "molecules",
            name: "molecules"
        },
        layout: [],
        locale: "en-US",
        tenant: "",
        titleFieldId: ""
    }),
    new CmsModelPlugin({
        name: "Group",
        modelId: "group",
        description: "",
        fields: [
            {
                fieldId: "align",
                id: "align",
                label: "align",
                type: "text",
                multipleValues: true,
                predefinedValues: {
                    enabled: true,
                    values: [
                        {
                            label: "center",
                            value: "center",
                            selected: true
                        },
                        {
                            label: "right",
                            value: "right",
                            selected: false
                        },
                        {
                            label: "around",
                            value: "around",
                            selected: false
                        },
                        {
                            label: "between",
                            value: "between",
                            selected: false
                        },
                        {
                            label: "evenly",
                            value: "evenly",
                            selected: false
                        }
                    ]
                }
            },
            {
                fieldId: "grid",
                id: "grid",
                label: "grid",
                type: "boolean"
            },
            {
                fieldId: "__CHILDREN__",
                id: "__CHILDREN__",
                label: "Nested elements",
                type: "ref",
                helpText: "Choose one or more nested models",
                multipleValues: true,
                settings: {
                    models: [
                        {
                            modelId: "button"
                        },
                        {
                            modelId: "card"
                        },
                        {
                            modelId: "icon"
                        }
                    ]
                }
            }
        ],
        group: {
            id: "molecules",
            name: "molecules"
        },
        layout: [],
        locale: "en-US",
        tenant: "",
        titleFieldId: ""
    }),
    new CmsModelPlugin({
        name: "Heading",
        modelId: "heading",
        description: "",
        fields: [
            {
                fieldId: "size",
                id: "size",
                label: "size",
                type: "text",
                multipleValues: true,
                predefinedValues: {
                    enabled: true,
                    values: [
                        {
                            label: "lg",
                            value: "lg",
                            selected: true
                        }
                    ]
                }
            },
            {
                fieldId: "variant",
                id: "variant",
                label: "variant",
                type: "text",
                multipleValues: true,
                predefinedValues: {
                    enabled: true,
                    values: [
                        {
                            label: "warning",
                            value: "warning",
                            selected: true
                        },
                        {
                            label: "danger",
                            value: "danger",
                            selected: false
                        }
                    ]
                }
            },
            {
                fieldId: "align",
                id: "align",
                label: "align",
                type: "text",
                multipleValues: true,
                predefinedValues: {
                    enabled: true,
                    values: [
                        {
                            label: "center",
                            value: "center",
                            selected: true
                        },
                        {
                            label: "right",
                            value: "right",
                            selected: false
                        }
                    ]
                }
            },
            {
                fieldId: "__CHILDREN__",
                id: "__CHILDREN__",
                label: "Nested elements",
                type: "ref",
                helpText: "Choose one or more nested models",
                multipleValues: true,
                settings: {
                    models: [
                        {
                            modelId: "button"
                        },
                        {
                            modelId: "group"
                        },
                        {
                            modelId: "icon"
                        },
                        {
                            modelId: "loading_indicator"
                        }
                    ]
                }
            }
        ],
        group: {
            id: "molecules",
            name: "molecules"
        },
        layout: [],
        locale: "en-US",
        tenant: "",
        titleFieldId: ""
    }),
    new CmsModelPlugin({
        name: "Item",
        modelId: "item",
        description: "",
        fields: [
            {
                fieldId: "icon_name",
                id: "icon_name",
                label: "iconName",
                type: "text"
            },
            {
                fieldId: "icon_viewbox",
                id: "icon_viewbox",
                label: "iconViewbox",
                type: "text"
            }
        ],
        group: {
            id: "molecules",
            name: "molecules"
        },
        layout: [],
        locale: "en-US",
        tenant: "",
        titleFieldId: ""
    }),
    new CmsModelPlugin({
        name: "Label",
        modelId: "label",
        description: "",
        fields: [],
        group: {
            id: "molecules",
            name: "molecules"
        },
        layout: [],
        locale: "en-US",
        tenant: "",
        titleFieldId: ""
    }),
    new CmsModelPlugin({
        name: "MediaContent",
        modelId: "media_content",
        description: "",
        fields: [
            {
                fieldId: "reverse",
                id: "reverse",
                label: "reverse",
                type: "boolean"
            },
            {
                fieldId: "align",
                id: "align",
                label: "align",
                type: "text",
                multipleValues: true,
                predefinedValues: {
                    enabled: true,
                    values: [
                        {
                            label: "center",
                            value: "center",
                            selected: true
                        },
                        {
                            label: "right",
                            value: "right",
                            selected: false
                        }
                    ]
                }
            },
            {
                fieldId: "valign",
                id: "valign",
                label: "valign",
                type: "text",
                multipleValues: true,
                predefinedValues: {
                    enabled: true,
                    values: [
                        {
                            label: "middle",
                            value: "middle",
                            selected: true
                        },
                        {
                            label: "bottom",
                            value: "bottom",
                            selected: false
                        }
                    ]
                }
            },
            {
                fieldId: "__CHILDREN__",
                id: "__CHILDREN__",
                label: "Nested elements",
                type: "ref",
                helpText: "Choose one or more nested models",
                multipleValues: true,
                settings: {
                    models: [
                        {
                            modelId: "detail_list"
                        },
                        {
                            modelId: "group"
                        },
                        {
                            modelId: "heading"
                        },
                        {
                            modelId: "rich_text"
                        }
                    ]
                }
            }
        ],
        group: {
            id: "molecules",
            name: "molecules"
        },
        layout: [],
        locale: "en-US",
        tenant: "",
        titleFieldId: ""
    }),
    new CmsModelPlugin({
        name: "Menu",
        modelId: "menu",
        description: "",
        fields: [
            {
                fieldId: "orientation",
                id: "orientation",
                label: "orientation",
                type: "text",
                multipleValues: true,
                predefinedValues: {
                    enabled: true,
                    values: [
                        {
                            label: "vertical",
                            value: "vertical",
                            selected: true
                        }
                    ]
                }
            },
            {
                fieldId: "id",
                id: "id",
                label: "id",
                type: "text"
            },
            {
                fieldId: "name",
                id: "name",
                label: "name",
                type: "text"
            },
            {
                fieldId: "__CHILDREN__",
                id: "__CHILDREN__",
                label: "Nested elements",
                type: "ref",
                helpText: "Choose one or more nested models",
                multipleValues: true,
                settings: {
                    models: [
                        {
                            modelId: "drop_down"
                        }
                    ]
                }
            }
        ],
        group: {
            id: "molecules",
            name: "molecules"
        },
        layout: [],
        locale: "en-US",
        tenant: "",
        titleFieldId: ""
    }),
    new CmsModelPlugin({
        name: "Mnemonic",
        modelId: "mnemonic",
        description: "",
        fields: [
            {
                fieldId: "seed",
                id: "seed",
                label: "seed",
                type: "text"
            },
            {
                fieldId: "type",
                id: "type",
                label: "type",
                type: "text",
                multipleValues: true,
                predefinedValues: {
                    enabled: true,
                    values: [
                        {
                            label: "preview",
                            value: "preview",
                            selected: true
                        },
                        {
                            label: "confirm",
                            value: "confirm",
                            selected: false
                        }
                    ]
                }
            },
            {
                fieldId: "length",
                id: "length",
                label: "length",
                type: "number"
            },
            {
                fieldId: "disabled",
                id: "disabled",
                label: "disabled",
                type: "boolean"
            },
            {
                fieldId: "__CHILDREN__",
                id: "__CHILDREN__",
                label: "Nested elements",
                type: "ref",
                helpText: "Choose one or more nested models",
                multipleValues: true,
                settings: {
                    models: [
                        {
                            modelId: "button"
                        },
                        {
                            modelId: "text_field"
                        }
                    ]
                }
            }
        ],
        group: {
            id: "molecules",
            name: "molecules"
        },
        layout: [],
        locale: "en-US",
        tenant: "",
        titleFieldId: ""
    }),
    new CmsModelPlugin({
        name: "Pagination",
        modelId: "pagination",
        description: "",
        fields: [
            {
                fieldId: "ref",
                id: "ref",
                label: "ref",
                type: "text"
            },
            {
                fieldId: "items",
                id: "items",
                label: "items",
                type: "text"
            },
            {
                fieldId: "items_per_page",
                id: "items_per_page",
                label: "itemsPerPage",
                type: "number"
            },
            {
                fieldId: "page_number",
                id: "page_number",
                label: "pageNumber",
                type: "number"
            },
            {
                fieldId: "__CHILDREN__",
                id: "__CHILDREN__",
                label: "Nested elements",
                type: "ref",
                helpText: "Choose one or more nested models",
                multipleValues: true,
                settings: {
                    models: [
                        {
                            modelId: "menu"
                        }
                    ]
                }
            }
        ],
        group: {
            id: "molecules",
            name: "molecules"
        },
        layout: [],
        locale: "en-US",
        tenant: "",
        titleFieldId: ""
    }),
    new CmsModelPlugin({
        name: "PasswordStrength",
        modelId: "password_strength",
        description: "",
        fields: [
            {
                fieldId: "password",
                id: "password",
                label: "password",
                type: "text"
            },
            {
                fieldId: "__CHILDREN__",
                id: "__CHILDREN__",
                label: "Nested elements",
                type: "ref",
                helpText: "Choose one or more nested models",
                multipleValues: true,
                settings: {
                    models: [
                        {
                            modelId: "progress_bar"
                        }
                    ]
                }
            }
        ],
        group: {
            id: "molecules",
            name: "molecules"
        },
        layout: [],
        locale: "en-US",
        tenant: "",
        titleFieldId: ""
    }),
    new CmsModelPlugin({
        name: "Statistic",
        modelId: "statistic",
        description: "",
        fields: [
            {
                fieldId: "title",
                id: "title",
                label: "title",
                type: "text"
            },
            {
                fieldId: "__CHILDREN__",
                id: "__CHILDREN__",
                label: "Nested elements",
                type: "ref",
                helpText: "Choose one or more nested models",
                multipleValues: true,
                settings: {
                    models: [
                        {
                            modelId: "chip"
                        }
                    ]
                }
            }
        ],
        group: {
            id: "molecules",
            name: "molecules"
        },
        layout: [],
        locale: "en-US",
        tenant: "",
        titleFieldId: ""
    }),
    new CmsModelPlugin({
        name: "StepList",
        modelId: "step_list",
        description: "",
        fields: [
            {
                fieldId: "variant",
                id: "variant",
                label: "variant",
                type: "text",
                multipleValues: true,
                predefinedValues: {
                    enabled: true,
                    values: [
                        {
                            label: "cta",
                            value: "cta",
                            selected: true
                        },
                        {
                            label: "info",
                            value: "info",
                            selected: false
                        },
                        {
                            label: "success",
                            value: "success",
                            selected: false
                        },
                        {
                            label: "warning",
                            value: "warning",
                            selected: false
                        },
                        {
                            label: "danger",
                            value: "danger",
                            selected: false
                        }
                    ]
                }
            }
        ],
        group: {
            id: "molecules",
            name: "molecules"
        },
        layout: [],
        locale: "en-US",
        tenant: "",
        titleFieldId: ""
    }),
    new CmsModelPlugin({
        name: "Word",
        modelId: "word",
        description: "",
        fields: [
            {
                fieldId: "value",
                id: "value",
                label: "value",
                type: "text"
            },
            {
                fieldId: "index",
                id: "index",
                label: "index",
                type: "text"
            },
            {
                fieldId: "disabled",
                id: "disabled",
                label: "disabled",
                type: "text"
            },
            {
                fieldId: "id",
                id: "id",
                label: "id",
                type: "text"
            }
        ],
        group: {
            id: "molecules",
            name: "molecules"
        },
        layout: [],
        locale: "en-US",
        tenant: "",
        titleFieldId: ""
    }),
    new CmsModelPlugin({
        name: "Accordion",
        modelId: "accordion",
        description: "",
        fields: [
            {
                fieldId: "multiselect",
                id: "multiselect",
                label: "multiselect",
                type: "boolean"
            },
            {
                fieldId: "__CHILDREN__",
                id: "__CHILDREN__",
                label: "Nested elements",
                type: "ref",
                helpText: "Choose one or more nested models",
                multipleValues: true,
                settings: {
                    models: [
                        {
                            modelId: "button"
                        }
                    ]
                }
            }
        ],
        group: {
            id: "organisms",
            name: "organisms"
        },
        layout: [],
        locale: "en-US",
        tenant: "",
        titleFieldId: ""
    }),
    new CmsModelPlugin({
        name: "Actions",
        modelId: "actions",
        description: "",
        fields: [],
        group: {
            id: "organisms",
            name: "organisms"
        },
        layout: [],
        locale: "en-US",
        tenant: "",
        titleFieldId: ""
    }),
    new CmsModelPlugin({
        name: "AppsMenu",
        modelId: "apps_menu",
        description: "",
        fields: [
            {
                fieldId: "apps",
                id: "apps",
                label: "apps",
                type: "text"
            },
            {
                fieldId: "app_name",
                id: "app_name",
                label: "appName",
                type: "text"
            }
        ],
        group: {
            id: "organisms",
            name: "organisms"
        },
        layout: [],
        locale: "en-US",
        tenant: "",
        titleFieldId: ""
    }),
    new CmsModelPlugin({
        name: "Card",
        modelId: "card",
        description: "",
        fields: [
            {
                fieldId: "variant",
                id: "variant",
                label: "variant",
                type: "text",
                multipleValues: true,
                predefinedValues: {
                    enabled: true,
                    values: [
                        {
                            label: "cta",
                            value: "cta",
                            selected: true
                        },
                        {
                            label: "info",
                            value: "info",
                            selected: false
                        },
                        {
                            label: "success",
                            value: "success",
                            selected: false
                        },
                        {
                            label: "warning",
                            value: "warning",
                            selected: false
                        },
                        {
                            label: "danger",
                            value: "danger",
                            selected: false
                        }
                    ]
                }
            },
            {
                fieldId: "state",
                id: "state",
                label: "state",
                type: "text",
                multipleValues: true,
                predefinedValues: {
                    enabled: true,
                    values: [
                        {
                            label: "error",
                            value: "error",
                            selected: true
                        },
                        {
                            label: "danger",
                            value: "danger",
                            selected: false
                        }
                    ]
                }
            },
            {
                fieldId: "href",
                id: "href",
                label: "href",
                type: "text"
            },
            {
                fieldId: "disabled",
                id: "disabled",
                label: "disabled",
                type: "boolean"
            },
            {
                fieldId: "overflow",
                id: "overflow",
                label: "overflow",
                type: "boolean"
            },
            {
                fieldId: "__CHILDREN__",
                id: "__CHILDREN__",
                label: "Nested elements",
                type: "ref",
                helpText: "Choose one or more nested models",
                multipleValues: true,
                settings: {
                    models: [
                        {
                            modelId: "accordion"
                        },
                        {
                            modelId: "breadcrumb"
                        },
                        {
                            modelId: "content"
                        },
                        {
                            modelId: "detail_list"
                        },
                        {
                            modelId: "disclaimer_list"
                        },
                        {
                            modelId: "heading"
                        },
                        {
                            modelId: "media_content"
                        },
                        {
                            modelId: "mnemonic"
                        },
                        {
                            modelId: "rich_text"
                        },
                        {
                            modelId: "wizard"
                        }
                    ]
                }
            }
        ],
        group: {
            id: "organisms",
            name: "organisms"
        },
        layout: [],
        locale: "en-US",
        tenant: "",
        titleFieldId: ""
    }),
    new CmsModelPlugin({
        name: "CategoryMenu",
        modelId: "category_menu",
        description: "",
        fields: [
            {
                fieldId: "category",
                id: "category",
                label: "category",
                type: "text"
            }
        ],
        group: {
            id: "organisms",
            name: "organisms"
        },
        layout: [],
        locale: "en-US",
        tenant: "",
        titleFieldId: ""
    }),
    new CmsModelPlugin({
        name: "CookieBanner",
        modelId: "cookie_banner",
        description: "",
        fields: [
            {
                fieldId: "id",
                id: "id",
                label: "id",
                type: "text"
            },
            {
                fieldId: "cookie_name",
                id: "cookie_name",
                label: "cookieName",
                type: "text"
            },
            {
                fieldId: "dark_mode_cookie_name",
                id: "dark_mode_cookie_name",
                label: "darkModeCookieName",
                type: "text"
            },
            {
                fieldId: "cookie_config",
                id: "cookie_config",
                label: "cookieConfig",
                type: "text"
            },
            {
                fieldId: "accept_label",
                id: "accept_label",
                label: "acceptLabel",
                type: "text"
            },
            {
                fieldId: "settings_label",
                id: "settings_label",
                label: "settingsLabel",
                type: "text"
            },
            {
                fieldId: "show_banner",
                id: "show_banner",
                label: "showBanner",
                type: "boolean"
            },
            {
                fieldId: "show_settings",
                id: "show_settings",
                label: "showSettings",
                type: "boolean"
            },
            {
                fieldId: "close_scrim",
                id: "close_scrim",
                label: "closeScrim",
                type: "boolean"
            }
        ],
        group: {
            id: "organisms",
            name: "organisms"
        },
        layout: [],
        locale: "en-US",
        tenant: "",
        titleFieldId: ""
    }),
    new CmsModelPlugin({
        name: "Datum",
        modelId: "datum",
        description: "",
        fields: [
            {
                fieldId: "variant",
                id: "variant",
                label: "variant",
                type: "text"
            },
            {
                fieldId: "data_key",
                id: "data_key",
                label: "dataKey",
                type: "text"
            },
            {
                fieldId: "hidden",
                id: "hidden",
                label: "hidden",
                type: "boolean"
            },
            {
                fieldId: "colspan",
                id: "colspan",
                label: "colspan",
                type: "text"
            },
            {
                fieldId: "id",
                id: "id",
                label: "id",
                type: "text"
            },
            {
                fieldId: "__CHILDREN__",
                id: "__CHILDREN__",
                label: "Nested elements",
                type: "ref",
                helpText: "Choose one or more nested models",
                multipleValues: true,
                settings: {
                    models: [
                        {
                            modelId: "chip"
                        },
                        {
                            modelId: "heading"
                        },
                        {
                            modelId: "loading_indicator"
                        },
                        {
                            modelId: "truncate_text"
                        }
                    ]
                }
            }
        ],
        group: {
            id: "organisms",
            name: "organisms"
        },
        layout: [],
        locale: "en-US",
        tenant: "",
        titleFieldId: ""
    }),
    new CmsModelPlugin({
        name: "ErrorBlock",
        modelId: "error_block",
        description: "",
        fields: [
            {
                fieldId: "code",
                id: "code",
                label: "code",
                type: "number"
            },
            {
                fieldId: "message",
                id: "message",
                label: "message",
                type: "text"
            },
            {
                fieldId: "stack",
                id: "stack",
                label: "stack",
                type: "text"
            },
            {
                fieldId: "dev",
                id: "dev",
                label: "dev",
                type: "text"
            }
        ],
        group: {
            id: "organisms",
            name: "organisms"
        },
        layout: [],
        locale: "en-US",
        tenant: "",
        titleFieldId: ""
    }),
    new CmsModelPlugin({
        name: "Footer",
        modelId: "footer",
        description: "",
        fields: [
            {
                fieldId: "type",
                id: "type",
                label: "type",
                type: "text",
                multipleValues: true,
                predefinedValues: {
                    enabled: true,
                    values: [
                        {
                            label: "minimal",
                            value: "minimal",
                            selected: true
                        }
                    ]
                }
            },
            {
                fieldId: "social",
                id: "social",
                label: "social",
                type: "text"
            },
            {
                fieldId: "categories",
                id: "categories",
                label: "categories",
                type: "text"
            },
            {
                fieldId: "__CHILDREN__",
                id: "__CHILDREN__",
                label: "Nested elements",
                type: "ref",
                helpText: "Choose one or more nested models",
                multipleValues: true,
                settings: {
                    models: [
                        {
                            modelId: "icon"
                        },
                        {
                            modelId: "logo"
                        },
                        {
                            modelId: "menu"
                        }
                    ]
                }
            }
        ],
        group: {
            id: "organisms",
            name: "organisms"
        },
        layout: [],
        locale: "en-US",
        tenant: "",
        titleFieldId: ""
    }),
    new CmsModelPlugin({
        name: "Form",
        modelId: "form",
        description: "",
        fields: [
            {
                fieldId: "submit_handler",
                id: "submit_handler",
                label: "submitHandler",
                type: "text"
            },
            {
                fieldId: "schema",
                id: "schema",
                label: "schema",
                type: "text"
            },
            {
                fieldId: "fields",
                id: "fields",
                label: "fields",
                type: "text"
            },
            {
                fieldId: "submitted",
                id: "submitted",
                label: "submitted",
                type: "text"
            },
            {
                fieldId: "__CHILDREN__",
                id: "__CHILDREN__",
                label: "Nested elements",
                type: "ref",
                helpText: "Choose one or more nested models",
                multipleValues: true,
                settings: {
                    models: [
                        {
                            modelId: "file_upload"
                        },
                        {
                            modelId: "group"
                        }
                    ]
                }
            }
        ],
        group: {
            id: "organisms",
            name: "organisms"
        },
        layout: [],
        locale: "en-US",
        tenant: "",
        titleFieldId: ""
    }),
    new CmsModelPlugin({
        name: "Hero",
        modelId: "hero",
        description: "",
        fields: [
            {
                fieldId: "__CHILDREN__",
                id: "__CHILDREN__",
                label: "Nested elements",
                type: "ref",
                helpText: "Choose one or more nested models",
                multipleValues: true,
                settings: {
                    models: [
                        {
                            modelId: "alert"
                        },
                        {
                            modelId: "button"
                        },
                        {
                            modelId: "heading"
                        },
                        {
                            modelId: "rich_text"
                        }
                    ]
                }
            }
        ],
        group: {
            id: "organisms",
            name: "organisms"
        },
        layout: [],
        locale: "en-US",
        tenant: "",
        titleFieldId: ""
    }),
    new CmsModelPlugin({
        name: "Item",
        modelId: "item",
        description: "",
        fields: [
            {
                fieldId: "id",
                id: "id",
                label: "id",
                type: "text"
            },
            {
                fieldId: "title",
                id: "title",
                label: "title",
                type: "text"
            },
            {
                fieldId: "expanded",
                id: "expanded",
                label: "expanded",
                type: "boolean"
            },
            {
                fieldId: "disabled",
                id: "disabled",
                label: "disabled",
                type: "boolean"
            },
            {
                fieldId: "ref",
                id: "ref",
                label: "ref",
                type: "text"
            }
        ],
        group: {
            id: "organisms",
            name: "organisms"
        },
        layout: [],
        locale: "en-US",
        tenant: "",
        titleFieldId: ""
    }),
    new CmsModelPlugin({
        name: "LegalMenu",
        modelId: "legal_menu",
        description: "",
        fields: [
            {
                fieldId: "orientation",
                id: "orientation",
                label: "orientation",
                type: "text"
            }
        ],
        group: {
            id: "organisms",
            name: "organisms"
        },
        layout: [],
        locale: "en-US",
        tenant: "",
        titleFieldId: ""
    }),
    new CmsModelPlugin({
        name: "LinksMenu",
        modelId: "links_menu",
        description: "",
        fields: [
            {
                fieldId: "links",
                id: "links",
                label: "links",
                type: "text"
            }
        ],
        group: {
            id: "organisms",
            name: "organisms"
        },
        layout: [],
        locale: "en-US",
        tenant: "",
        titleFieldId: ""
    }),
    new CmsModelPlugin({
        name: "Maximal",
        modelId: "maximal",
        description: "",
        fields: [
            {
                fieldId: "categories",
                id: "categories",
                label: "categories",
                type: "text"
            }
        ],
        group: {
            id: "organisms",
            name: "organisms"
        },
        layout: [],
        locale: "en-US",
        tenant: "",
        titleFieldId: ""
    }),
    new CmsModelPlugin({
        name: "Minimal",
        modelId: "minimal",
        description: "",
        fields: [
            {
                fieldId: "copyright",
                id: "copyright",
                label: "copyright",
                type: "text"
            },
            {
                fieldId: "social",
                id: "social",
                label: "social",
                type: "text"
            }
        ],
        group: {
            id: "organisms",
            name: "organisms"
        },
        layout: [],
        locale: "en-US",
        tenant: "",
        titleFieldId: ""
    }),
    new CmsModelPlugin({
        name: "Navbar",
        modelId: "navbar",
        description: "",
        fields: [
            {
                fieldId: "title",
                id: "title",
                label: "title",
                type: "text"
            },
            {
                fieldId: "apps",
                id: "apps",
                label: "apps",
                type: "text"
            },
            {
                fieldId: "links",
                id: "links",
                label: "links",
                type: "text"
            },
            {
                fieldId: "app_name",
                id: "app_name",
                label: "appName",
                type: "text"
            },
            {
                fieldId: "cookie_config",
                id: "cookie_config",
                label: "cookieConfig",
                type: "text"
            },
            {
                fieldId: "id",
                id: "id",
                label: "id",
                type: "text"
            },
            {
                fieldId: "__CHILDREN__",
                id: "__CHILDREN__",
                label: "Nested elements",
                type: "ref",
                helpText: "Choose one or more nested models",
                multipleValues: true,
                settings: {
                    models: [
                        {
                            modelId: "logo"
                        },
                        {
                            modelId: "menu"
                        }
                    ]
                }
            }
        ],
        group: {
            id: "organisms",
            name: "organisms"
        },
        layout: [],
        locale: "en-US",
        tenant: "",
        titleFieldId: ""
    }),
    new CmsModelPlugin({
        name: "Newsletter",
        modelId: "newsletter",
        description: "",
        fields: [],
        group: {
            id: "organisms",
            name: "organisms"
        },
        layout: [],
        locale: "en-US",
        tenant: "",
        titleFieldId: ""
    }),
    new CmsModelPlugin({
        name: "Row",
        modelId: "row",
        description: "",
        fields: [
            {
                fieldId: "type",
                id: "type",
                label: "type",
                type: "text"
            },
            {
                fieldId: "hidden",
                id: "hidden",
                label: "hidden",
                type: "boolean"
            },
            {
                fieldId: "variant",
                id: "variant",
                label: "variant",
                type: "text"
            },
            {
                fieldId: "id",
                id: "id",
                label: "id",
                type: "text"
            },
            {
                fieldId: "__CHILDREN__",
                id: "__CHILDREN__",
                label: "Nested elements",
                type: "ref",
                helpText: "Choose one or more nested models",
                multipleValues: true,
                settings: {
                    models: [
                        {
                            modelId: "datum"
                        }
                    ]
                }
            }
        ],
        group: {
            id: "organisms",
            name: "organisms"
        },
        layout: [],
        locale: "en-US",
        tenant: "",
        titleFieldId: ""
    }),
    new CmsModelPlugin({
        name: "SearchList",
        modelId: "search_list",
        description: "",
        fields: [
            {
                fieldId: "data",
                id: "data",
                label: "data",
                type: "text"
            },
            {
                fieldId: "field_button",
                id: "field_button",
                label: "fieldButton",
                type: "boolean"
            },
            {
                fieldId: "data_search_results",
                id: "data_search_results",
                label: "dataSearchResults",
                type: "text"
            },
            {
                fieldId: "__CHILDREN__",
                id: "__CHILDREN__",
                label: "Nested elements",
                type: "ref",
                helpText: "Choose one or more nested models",
                multipleValues: true,
                settings: {
                    models: [
                        {
                            modelId: "control"
                        },
                        {
                            modelId: "detail_list"
                        }
                    ]
                }
            }
        ],
        group: {
            id: "organisms",
            name: "organisms"
        },
        layout: [],
        locale: "en-US",
        tenant: "",
        titleFieldId: ""
    }),
    new CmsModelPlugin({
        name: "SocialMediaMenu",
        modelId: "social_media_menu",
        description: "",
        fields: [
            {
                fieldId: "orientation",
                id: "orientation",
                label: "orientation",
                type: "text"
            },
            {
                fieldId: "social",
                id: "social",
                label: "social",
                type: "text"
            }
        ],
        group: {
            id: "organisms",
            name: "organisms"
        },
        layout: [],
        locale: "en-US",
        tenant: "",
        titleFieldId: ""
    }),
    new CmsModelPlugin({
        name: "Step",
        modelId: "step",
        description: "",
        fields: [
            {
                fieldId: "number",
                id: "number",
                label: "number",
                type: "number"
            }
        ],
        group: {
            id: "organisms",
            name: "organisms"
        },
        layout: [],
        locale: "en-US",
        tenant: "",
        titleFieldId: ""
    }),
    new CmsModelPlugin({
        name: "Table",
        modelId: "table",
        description: "",
        fields: [
            {
                fieldId: "data",
                id: "data",
                label: "data",
                type: "text"
            },
            {
                fieldId: "settings",
                id: "settings",
                label: "settings",
                type: "text"
            },
            {
                fieldId: "mobile_breakpoint",
                id: "mobile_breakpoint",
                label: "mobileBreakpoint",
                type: "text",
                multipleValues: true,
                predefinedValues: {
                    enabled: true,
                    values: [
                        {
                            label: "md",
                            value: "md",
                            selected: true
                        },
                        {
                            label: "lg",
                            value: "lg",
                            selected: false
                        },
                        {
                            label: "xl",
                            value: "xl",
                            selected: false
                        },
                        {
                            label: "xxl",
                            value: "xxl",
                            selected: false
                        }
                    ]
                }
            },
            {
                fieldId: "duration",
                id: "duration",
                label: "duration",
                type: "number"
            },
            {
                fieldId: "data_rows",
                id: "data_rows",
                label: "dataRows",
                type: "text"
            },
            {
                fieldId: "__CHILDREN__",
                id: "__CHILDREN__",
                label: "Nested elements",
                type: "ref",
                helpText: "Choose one or more nested models",
                multipleValues: true,
                settings: {
                    models: [
                        {
                            modelId: "drop_down"
                        },
                        {
                            modelId: "pagination"
                        }
                    ]
                }
            }
        ],
        group: {
            id: "organisms",
            name: "organisms"
        },
        layout: [],
        locale: "en-US",
        tenant: "",
        titleFieldId: ""
    }),
    new CmsModelPlugin({
        name: "Wizard",
        modelId: "wizard",
        description: "",
        fields: [
            {
                fieldId: "step_count",
                id: "step_count",
                label: "stepCount",
                type: "number"
            },
            {
                fieldId: "__CHILDREN__",
                id: "__CHILDREN__",
                label: "Nested elements",
                type: "ref",
                helpText: "Choose one or more nested models",
                multipleValues: true,
                settings: {
                    models: [
                        {
                            modelId: "breadcrumb"
                        },
                        {
                            modelId: "form"
                        },
                        {
                            modelId: "progress_bar"
                        }
                    ]
                }
            }
        ],
        group: {
            id: "organisms",
            name: "organisms"
        },
        layout: [],
        locale: "en-US",
        tenant: "",
        titleFieldId: ""
    }),
    new CmsModelPlugin({
        name: "BuyHomepage",
        modelId: "buy_homepage",
        description: "",
        fields: [
            {
                fieldId: "is_loading",
                id: "is_loading",
                label: "isLoading",
                type: "text",
                multipleValues: true,
                predefinedValues: {
                    enabled: true,
                    values: [
                        {
                            label: "object",
                            value: "object",
                            selected: true
                        }
                    ]
                }
            },
            {
                fieldId: "is_error",
                id: "is_error",
                label: "isError",
                type: "boolean"
            }
        ],
        group: {
            id: "templates",
            name: "templates"
        },
        layout: [],
        locale: "en-US",
        tenant: "",
        titleFieldId: ""
    }),
    new CmsModelPlugin({
        name: "Default",
        modelId: "default",
        description: "",
        fields: [
            {
                fieldId: "is_loading",
                id: "is_loading",
                label: "isLoading",
                type: "text",
                multipleValues: true,
                predefinedValues: {
                    enabled: true,
                    values: [
                        {
                            label: "object",
                            value: "object",
                            selected: true
                        }
                    ]
                }
            },
            {
                fieldId: "is_error",
                id: "is_error",
                label: "isError",
                type: "boolean"
            }
        ],
        group: {
            id: "templates",
            name: "templates"
        },
        layout: [],
        locale: "en-US",
        tenant: "",
        titleFieldId: ""
    }),
    new CmsModelPlugin({
        name: "DevopsCentered",
        modelId: "devops_centered",
        description: "",
        fields: [
            {
                fieldId: "is_loading",
                id: "is_loading",
                label: "isLoading",
                type: "text",
                multipleValues: true,
                predefinedValues: {
                    enabled: true,
                    values: [
                        {
                            label: "object",
                            value: "object",
                            selected: true
                        }
                    ]
                }
            },
            {
                fieldId: "is_error",
                id: "is_error",
                label: "isError",
                type: "boolean"
            }
        ],
        group: {
            id: "templates",
            name: "templates"
        },
        layout: [],
        locale: "en-US",
        tenant: "",
        titleFieldId: ""
    }),
    new CmsModelPlugin({
        name: "DevopsDashboard",
        modelId: "devops_dashboard",
        description: "",
        fields: [
            {
                fieldId: "is_loading",
                id: "is_loading",
                label: "isLoading",
                type: "text",
                multipleValues: true,
                predefinedValues: {
                    enabled: true,
                    values: [
                        {
                            label: "object",
                            value: "object",
                            selected: true
                        }
                    ]
                }
            },
            {
                fieldId: "is_error",
                id: "is_error",
                label: "isError",
                type: "boolean"
            }
        ],
        group: {
            id: "templates",
            name: "templates"
        },
        layout: [],
        locale: "en-US",
        tenant: "",
        titleFieldId: ""
    }),
    new CmsModelPlugin({
        name: "ExplorerCharts",
        modelId: "explorer_charts",
        description: "",
        fields: [
            {
                fieldId: "is_loading",
                id: "is_loading",
                label: "isLoading",
                type: "text",
                multipleValues: true,
                predefinedValues: {
                    enabled: true,
                    values: [
                        {
                            label: "object",
                            value: "object",
                            selected: true
                        }
                    ]
                }
            },
            {
                fieldId: "is_error",
                id: "is_error",
                label: "isError",
                type: "boolean"
            }
        ],
        group: {
            id: "templates",
            name: "templates"
        },
        layout: [],
        locale: "en-US",
        tenant: "",
        titleFieldId: ""
    }),
    new CmsModelPlugin({
        name: "ExplorerDetail",
        modelId: "explorer_detail",
        description: "",
        fields: [
            {
                fieldId: "is_loading",
                id: "is_loading",
                label: "isLoading",
                type: "text",
                multipleValues: true,
                predefinedValues: {
                    enabled: true,
                    values: [
                        {
                            label: "object",
                            value: "object",
                            selected: true
                        }
                    ]
                }
            },
            {
                fieldId: "is_error",
                id: "is_error",
                label: "isError",
                type: "boolean"
            }
        ],
        group: {
            id: "templates",
            name: "templates"
        },
        layout: [],
        locale: "en-US",
        tenant: "",
        titleFieldId: ""
    }),
    new CmsModelPlugin({
        name: "ExplorerHomepage",
        modelId: "explorer_homepage",
        description: "",
        fields: [
            {
                fieldId: "is_loading",
                id: "is_loading",
                label: "isLoading",
                type: "text",
                multipleValues: true,
                predefinedValues: {
                    enabled: true,
                    values: [
                        {
                            label: "object",
                            value: "object",
                            selected: true
                        }
                    ]
                }
            },
            {
                fieldId: "is_error",
                id: "is_error",
                label: "isError",
                type: "boolean"
            }
        ],
        group: {
            id: "templates",
            name: "templates"
        },
        layout: [],
        locale: "en-US",
        tenant: "",
        titleFieldId: ""
    }),
    new CmsModelPlugin({
        name: "ExplorerList",
        modelId: "explorer_list",
        description: "",
        fields: [
            {
                fieldId: "is_loading",
                id: "is_loading",
                label: "isLoading",
                type: "text",
                multipleValues: true,
                predefinedValues: {
                    enabled: true,
                    values: [
                        {
                            label: "object",
                            value: "object",
                            selected: true
                        }
                    ]
                }
            },
            {
                fieldId: "is_error",
                id: "is_error",
                label: "isError",
                type: "boolean"
            }
        ],
        group: {
            id: "templates",
            name: "templates"
        },
        layout: [],
        locale: "en-US",
        tenant: "",
        titleFieldId: ""
    }),
    new CmsModelPlugin({
        name: "ExtensionDefault",
        modelId: "extension_default",
        description: "",
        fields: [
            {
                fieldId: "is_loading",
                id: "is_loading",
                label: "isLoading",
                type: "text",
                multipleValues: true,
                predefinedValues: {
                    enabled: true,
                    values: [
                        {
                            label: "object",
                            value: "object",
                            selected: true
                        }
                    ]
                }
            },
            {
                fieldId: "is_error",
                id: "is_error",
                label: "isError",
                type: "boolean"
            }
        ],
        group: {
            id: "templates",
            name: "templates"
        },
        layout: [],
        locale: "en-US",
        tenant: "",
        titleFieldId: ""
    }),
    new CmsModelPlugin({
        name: "WalletDashboard",
        modelId: "wallet_dashboard",
        description: "",
        fields: [
            {
                fieldId: "is_loading",
                id: "is_loading",
                label: "isLoading",
                type: "text",
                multipleValues: true,
                predefinedValues: {
                    enabled: true,
                    values: [
                        {
                            label: "object",
                            value: "object",
                            selected: true
                        }
                    ]
                }
            },
            {
                fieldId: "is_error",
                id: "is_error",
                label: "isError",
                type: "boolean"
            }
        ],
        group: {
            id: "templates",
            name: "templates"
        },
        layout: [],
        locale: "en-US",
        tenant: "",
        titleFieldId: ""
    }),
    new CmsModelPlugin({
        name: "WalletHomepage",
        modelId: "wallet_homepage",
        description: "",
        fields: [
            {
                fieldId: "is_loading",
                id: "is_loading",
                label: "isLoading",
                type: "text",
                multipleValues: true,
                predefinedValues: {
                    enabled: true,
                    values: [
                        {
                            label: "object",
                            value: "object",
                            selected: true
                        }
                    ]
                }
            },
            {
                fieldId: "is_error",
                id: "is_error",
                label: "isError",
                type: "boolean"
            }
        ],
        group: {
            id: "templates",
            name: "templates"
        },
        layout: [],
        locale: "en-US",
        tenant: "",
        titleFieldId: ""
    }),
    new CmsModelPlugin({
        name: "WalletOption",
        modelId: "wallet_option",
        description: "",
        fields: [
            {
                fieldId: "is_loading",
                id: "is_loading",
                label: "isLoading",
                type: "text",
                multipleValues: true,
                predefinedValues: {
                    enabled: true,
                    values: [
                        {
                            label: "object",
                            value: "object",
                            selected: true
                        }
                    ]
                }
            },
            {
                fieldId: "is_error",
                id: "is_error",
                label: "isError",
                type: "boolean"
            }
        ],
        group: {
            id: "templates",
            name: "templates"
        },
        layout: [],
        locale: "en-US",
        tenant: "",
        titleFieldId: ""
    }),
    new CmsModelPlugin({
        name: "WalletWizard",
        modelId: "wallet_wizard",
        description: "",
        fields: [
            {
                fieldId: "is_loading",
                id: "is_loading",
                label: "isLoading",
                type: "text",
                multipleValues: true,
                predefinedValues: {
                    enabled: true,
                    values: [
                        {
                            label: "object",
                            value: "object",
                            selected: true
                        }
                    ]
                }
            },
            {
                fieldId: "is_error",
                id: "is_error",
                label: "isError",
                type: "boolean"
            }
        ],
        group: {
            id: "templates",
            name: "templates"
        },
        layout: [],
        locale: "en-US",
        tenant: "",
        titleFieldId: ""
    })
];
