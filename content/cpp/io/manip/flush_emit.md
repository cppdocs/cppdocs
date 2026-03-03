---
title: "std::flush_emit"
source_path: "cpp/io/manip/flush_emit"
header: "<ostream>"
category: "io"
since: "C++20"
---

Flushes the output sequence os as if by calling os.flush(). Then, if os.rdbuf() actually points to a [std::basic_syncbuf](/cpp/io/basic_syncbuf/)<CharT, Traits, Allocator> buf, calls buf.emit().

## Declarations
```cpp
template< class CharT, class Traits >
std::basic_ostream<CharT, Traits>& flush_emit( std::basic_ostream<CharT, Traits>& os );
```
_(since C++20)_

## Parameters
- `os`: reference to output stream

## Return value
os (reference to the stream after manipulation)

## Example
This section is incompleteReason: no example

## See also
- [flush](/cpp/io/basic_ostream/flush/)
