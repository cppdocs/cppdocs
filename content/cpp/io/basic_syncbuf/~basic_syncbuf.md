---
title: "std::basic_syncbuf<CharT,Traits,Allocator>::~basic_syncbuf"
source_path: "cpp/io/basic_syncbuf/~basic_syncbuf"
category: "io"
since: "C++20"
---

Calls [emit()](/cpp/io/basic_syncbuf/emit/) to transmit all pending output (and delayed flush, if any) to the wrapped stream. If an exception is thrown by this call, it is caught and ignored.

## Declarations
```cpp
~basic_syncbuf();
```

## Notes
Normally called by the destructor of the owning std::basic_osyncstream.

## Example
This section is incompleteReason: no example

## See also
- [(destructor)](/cpp/io/basic_osyncstream/~basic_osyncstream/)
- [(constructor)](/cpp/io/basic_syncbuf/basic_syncbuf/)
