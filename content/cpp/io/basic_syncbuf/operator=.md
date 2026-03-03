---
title: "std::basic_syncbuf<CharT,Traits,Allocator>::operator="
source_path: "cpp/io/basic_syncbuf/operator"
category: "io"
---

First, calls [emit()](/cpp/io/basic_syncbuf/emit/) to transmit all pending output (and delayed flush, if any) to the wrapped stream.

## Declarations
```cpp
basic_syncbuf& operator=( basic_syncbuf&& other );
```

## Parameters
- `other`: another std::basic_syncbuf to move from

## Return value
*this

## Example
This section is incompleteReason: no example

## See also
- [operator=](/cpp/io/basic_osyncstream/operator/)
- [(constructor)](/cpp/io/basic_syncbuf/basic_syncbuf/)
- [emit](/cpp/io/basic_syncbuf/emit/)
- [swap](/cpp/io/basic_syncbuf/swap/)
