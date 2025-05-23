const color = [
  "primary",
  "secondary",
  "success",
  "info",
  "warning",
  "error",
  "neutral"
] as const

export default {
  "slots": {
    "base": [
      "group relative block px-4 py-3 rounded-[calc(var(--ui-radius)*1.5)] text-sm/6 my-5 last:mb-0 [&_code]:text-xs/5 [&_code]:bg-(--ui-bg) [&_pre]:bg-(--ui-bg) [&>div]:my-2.5 [&_ul]:my-2.5 [&_ol]:my-2.5 [&>*]:last:!mb-0 [&_ul]:ps-4.5 [&_ol]:ps-4.5 [&_li]:my-0",
      "transition-colors"
    ],
    "icon": [
      "size-4 shrink-0 align-sub me-1.5",
      "transition-colors"
    ],
    "externalIcon": [
      "size-4 align-top absolute right-2 top-2 pointer-events-none",
      "transition-colors"
    ]
  },
  "variants": {
    "color": {
      "primary": {
        "base": "border border-(--ui-primary)/25 bg-(--ui-primary)/10 text-(--ui-color-primary-600) dark:text-(--ui-color-primary-300) [&_a]:text-(--ui-primary) [&_a]:hover:border-(--ui-primary) [&_code]:text-(--ui-color-primary-600) dark:[&_code]:text-(--ui-color-primary-300) [&_code]:border-(--ui-primary)/25 [&_a]:hover:[&>code]:border-(--ui-primary) [&_a]:hover:[&>code]:text-(--ui-primary) [&>ul]:marker:text-(--ui-primary)/50",
        "icon": "text-(--ui-primary)",
        "externalIcon": "text-(--ui-color-primary-600) dark:text-(--ui-color-primary-300)"
      },
      "secondary": {
        "base": "border border-(--ui-secondary)/25 bg-(--ui-secondary)/10 text-(--ui-color-secondary-600) dark:text-(--ui-color-secondary-300) [&_a]:text-(--ui-secondary) [&_a]:hover:border-(--ui-secondary) [&_code]:text-(--ui-color-secondary-600) dark:[&_code]:text-(--ui-color-secondary-300) [&_code]:border-(--ui-secondary)/25 [&_a]:hover:[&>code]:border-(--ui-secondary) [&_a]:hover:[&>code]:text-(--ui-secondary) [&>ul]:marker:text-(--ui-secondary)/50",
        "icon": "text-(--ui-secondary)",
        "externalIcon": "text-(--ui-color-secondary-600) dark:text-(--ui-color-secondary-300)"
      },
      "success": {
        "base": "border border-(--ui-success)/25 bg-(--ui-success)/10 text-(--ui-color-success-600) dark:text-(--ui-color-success-300) [&_a]:text-(--ui-success) [&_a]:hover:border-(--ui-success) [&_code]:text-(--ui-color-success-600) dark:[&_code]:text-(--ui-color-success-300) [&_code]:border-(--ui-success)/25 [&_a]:hover:[&>code]:border-(--ui-success) [&_a]:hover:[&>code]:text-(--ui-success) [&>ul]:marker:text-(--ui-success)/50",
        "icon": "text-(--ui-success)",
        "externalIcon": "text-(--ui-color-success-600) dark:text-(--ui-color-success-300)"
      },
      "info": {
        "base": "border border-(--ui-info)/25 bg-(--ui-info)/10 text-(--ui-color-info-600) dark:text-(--ui-color-info-300) [&_a]:text-(--ui-info) [&_a]:hover:border-(--ui-info) [&_code]:text-(--ui-color-info-600) dark:[&_code]:text-(--ui-color-info-300) [&_code]:border-(--ui-info)/25 [&_a]:hover:[&>code]:border-(--ui-info) [&_a]:hover:[&>code]:text-(--ui-info) [&>ul]:marker:text-(--ui-info)/50",
        "icon": "text-(--ui-info)",
        "externalIcon": "text-(--ui-color-info-600) dark:text-(--ui-color-info-300)"
      },
      "warning": {
        "base": "border border-(--ui-warning)/25 bg-(--ui-warning)/10 text-(--ui-color-warning-600) dark:text-(--ui-color-warning-300) [&_a]:text-(--ui-warning) [&_a]:hover:border-(--ui-warning) [&_code]:text-(--ui-color-warning-600) dark:[&_code]:text-(--ui-color-warning-300) [&_code]:border-(--ui-warning)/25 [&_a]:hover:[&>code]:border-(--ui-warning) [&_a]:hover:[&>code]:text-(--ui-warning) [&>ul]:marker:text-(--ui-warning)/50",
        "icon": "text-(--ui-warning)",
        "externalIcon": "text-(--ui-color-warning-600) dark:text-(--ui-color-warning-300)"
      },
      "error": {
        "base": "border border-(--ui-error)/25 bg-(--ui-error)/10 text-(--ui-color-error-600) dark:text-(--ui-color-error-300) [&_a]:text-(--ui-error) [&_a]:hover:border-(--ui-error) [&_code]:text-(--ui-color-error-600) dark:[&_code]:text-(--ui-color-error-300) [&_code]:border-(--ui-error)/25 [&_a]:hover:[&>code]:border-(--ui-error) [&_a]:hover:[&>code]:text-(--ui-error) [&>ul]:marker:text-(--ui-error)/50",
        "icon": "text-(--ui-error)",
        "externalIcon": "text-(--ui-color-error-600) dark:text-(--ui-color-error-300)"
      },
      "neutral": {
        "base": "border border-(--ui-border-muted) bg-(--ui-bg-muted) text-(--ui-text)",
        "icon": "text-(--ui-text-highlighted)",
        "externalIcon": "text-(--ui-text-dimmed)"
      }
    },
    "to": {
      "true": "border-dashed"
    }
  },
  "compoundVariants": [
    {
      "color": "primary" as typeof color[number],
      "to": true,
      "class": {
        "base": "hover:border-(--ui-primary)",
        "externalIcon": "group-hover:text-(--ui-primary)"
      }
    },
    {
      "color": "secondary" as typeof color[number],
      "to": true,
      "class": {
        "base": "hover:border-(--ui-secondary)",
        "externalIcon": "group-hover:text-(--ui-secondary)"
      }
    },
    {
      "color": "success" as typeof color[number],
      "to": true,
      "class": {
        "base": "hover:border-(--ui-success)",
        "externalIcon": "group-hover:text-(--ui-success)"
      }
    },
    {
      "color": "info" as typeof color[number],
      "to": true,
      "class": {
        "base": "hover:border-(--ui-info)",
        "externalIcon": "group-hover:text-(--ui-info)"
      }
    },
    {
      "color": "warning" as typeof color[number],
      "to": true,
      "class": {
        "base": "hover:border-(--ui-warning)",
        "externalIcon": "group-hover:text-(--ui-warning)"
      }
    },
    {
      "color": "error" as typeof color[number],
      "to": true,
      "class": {
        "base": "hover:border-(--ui-error)",
        "externalIcon": "group-hover:text-(--ui-error)"
      }
    },
    {
      "color": "neutral" as typeof color[number],
      "to": true,
      "class": {
        "base": "hover:border-(--ui-border-inverted)",
        "externalIcon": "group-hover:text-(--ui-text-highlighted)"
      }
    }
  ],
  "defaultVariants": {
    "color": "neutral" as typeof color[number]
  }
}