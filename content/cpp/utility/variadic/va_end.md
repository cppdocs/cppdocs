---
title: "va_end"
source_path: "cpp/utility/variadic/va_end"
header: "<cstdarg>"
category: "utility"
---

The va_end macro performs cleanup for an ap object initialized by a call to [va_start](/cpp/utility/variadic/va_start/) or [va_copy](/cpp/utility/variadic/va_copy/). va_end may modify ap so that it is no longer usable.

## Declarations
```cpp
void va_end( std::va_list ap );
```

## Parameters
- `ap`: an instance of the va_list type to clean up

## See also
- [va_start](/cpp/utility/variadic/va_start/)
- [va_copy](/cpp/utility/variadic/va_copy/)
- [va_arg](/cpp/utility/variadic/va_arg/)
- [C documentation](/c/variadic/va_end/)
