---
title: "std::emit_on_flush, std::noemit_on_flush"
source_path: "cpp/io/manip/emit_on_flush"
header: "<ostream>"
category: "io"
since: "C++20"
---

If os.rdbuf() actually points to a [std::basic_syncbuf](/cpp/io/basic_syncbuf/)<CharT, Traits, Allocator> buf, toggles whether it emits (i.e., transmits data to the underlying stream buffer) when flushed:

## Declarations
```cpp
template< class CharT, class Traits >
std::basic_ostream<CharT, Traits>& emit_on_flush( std::basic_ostream<CharT, Traits>& os );
```
_(since C++20)_

```cpp
template< class CharT, class Traits >
std::basic_ostream<CharT, Traits>& noemit_on_flush( std::basic_ostream<CharT, Traits>& os );
```
_(since C++20)_

## Parameters
- `os`: reference to output stream

## Return value
os (reference to the stream after manipulation)

## Example
This section is incompleteReason: no example

## See also
- [set_emit_on_sync](/cpp/io/basic_syncbuf/set_emit_on_sync/)
