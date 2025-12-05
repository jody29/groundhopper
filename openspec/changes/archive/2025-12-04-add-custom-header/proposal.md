## Why

The native app needs a consistent, branded header component that can be used across tab screens. Currently, screens use default navigation headers or no headers at all. A custom header will provide:

- Consistent branding with the app's red color scheme (#B91C1C)
- Support for subtitle with icon, title, and optional action buttons
- Visual hierarchy with proper typography and spacing
- Reusable component that can be configured per screen

## What Changes

- Create new `components/layout/` directory for layout-related components
- Add `Header` component with the following features:
  - Red background (#B91C1C)
  - Subtitle (uppercase, with optional icon)
  - Title (white, #FFFFFF, with decorative dash underneath)
  - Optional button/action passed via children prop
  - Proper spacing and typography hierarchy
- Integrate header into tab screens via `header` option in `Tabs.Screen`
- Use NativeWind/Tailwind for styling (consistent with existing codebase)

## Impact

- Affected specs: `header-component` (new)
- Affected code:
  - `apps/native/src/components/layout/` (new directory)
  - `apps/native/src/components/layout/header.tsx` (new file)
  - `apps/native/src/app/(tabs)/_layout.tsx` (updated to use custom header)
  - Potentially other screen layouts that need headers
- No breaking changes; this is purely additive
