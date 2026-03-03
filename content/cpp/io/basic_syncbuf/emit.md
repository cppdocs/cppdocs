---
title: "std::basic_syncbuf<CharT,Traits,Allocator>::emit"
source_path: "cpp/io/basic_syncbuf/emit"
category: "io"
since: "C++20"
---

Atomically transmits all pending output to the wrapped stream.

## Declarations
```cpp
bool emit();
```

## Return value
true if all of the following is true:

## Notes
Normally called by the destructor or move assignment of the owning std::basic_osyncstream, or by [std::basic_osyncstream::emit](/cpp/io/basic_osyncstream/emit/).

## Example
This section is incompleteReason: no example

## See also
- [(destructor)](/cpp/io/basic_osyncstream/~basic_osyncstream/)
- [emit](/cpp/io/basic_osyncstream/emit/)
- [(constructor)](/cpp/io/basic_syncbuf/basic_syncbuf/)
