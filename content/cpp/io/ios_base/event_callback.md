---
title: "std::ios_base::event_callback"
source_path: "cpp/io/ios_base/event_callback"
category: "io"
---

The type of function callbacks that can be registered using [register_callback()](/cpp/io/ios_base/register_callback/) to be called on specific events.

## Declarations
```cpp
typedef void ( *event_callback )( event type, ios_base& ios, int index );
```

## See also
- [copyfmt](/cpp/io/basic_ios/copyfmt/)
- [imbue](/cpp/io/ios_base/imbue/)
- [(destructor)](/cpp/io/ios_base/~ios_base/)
- [register_callback](/cpp/io/ios_base/register_callback/)
