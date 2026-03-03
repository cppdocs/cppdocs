---
title: "std::basic_ospanstream<CharT,Traits>::basic_ospanstream"
source_path: "cpp/io/basic_ospanstream/basic_ospanstream"
category: "io"
since: "C++23"
---

Constructs a new basic_ospanstream.

## Declarations
```cpp
explicit basic_ospanstream( std::span<CharT> s, std::ios_base::openmode mode =
std::ios_base::out );
```
_(since C++23)_

```cpp
basic_ospanstream( basic_ospanstream&& rhs );
```
_(since C++23)_

```cpp
basic_ospanstream( const basic_ospanstream& ) = delete;
```
_(since C++23)_

## Parameters
- `s`: std::span referencing the storage to be use as initial underlying buffer of stream
- `mode`: specifies stream open mode. Following constants and bit-wise OR between them may be used: Constant Explanation app seek to the end of stream before each write binary open in binary mode in open for reading out open for writing trunc discard the contents of the stream when opening ate seek to the end of stream immediately after open noreplace (C++23) open in exclusive mode
- `other`: another basic_ospanstream to be moved from

## Example
This section is incompleteReason: no example

## See also
- [(constructor)](/cpp/io/basic_spanbuf/basic_spanbuf/)
