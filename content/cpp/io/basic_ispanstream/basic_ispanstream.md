---
title: "std::basic_ispanstream<CharT,Traits>::basic_ispanstream"
source_path: "cpp/io/basic_ispanstream/basic_ispanstream"
category: "io"
since: "C++23"
---

Constructs a new basic_ispanstream.

## Declarations
```cpp
explicit basic_ispanstream( std::span<CharT> s, std::ios_base::openmode mode =
std::ios_base::in );
```
_(since C++23)_

```cpp
template< class ROS >
explicit basic_ispanstream( ROS&& r );
```
_(since C++23)_

```cpp
basic_ispanstream( basic_ispanstream&& rhs );
```
_(since C++23)_

```cpp
basic_ispanstream( const basic_ispanstream& ) = delete;
```
_(since C++23)_

## Parameters
- `s`: std::span referencing the storage to be use as initial underlying buffer of stream
- `r`: borrowed_range to be use as initial underlying buffer of stream
- `mode`: specifies stream open mode. Following constants and bit-wise OR between them may be used: Constant Explanation app seek to the end of stream before each write binary open in binary mode in open for reading out open for writing trunc discard the contents of the stream when opening ate seek to the end of stream immediately after open noreplace (C++23) open in exclusive mode
- `other`: another basic_ispanstream to be moved from

## Example
This section is incompleteReason: no example

## See also
- [(constructor)](/cpp/io/basic_spanbuf/basic_spanbuf/)
