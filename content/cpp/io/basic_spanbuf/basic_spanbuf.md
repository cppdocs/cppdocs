---
title: "std::basic_spanbuf<CharT,Traits>::basic_spanbuf"
source_path: "cpp/io/basic_spanbuf/basic_spanbuf"
category: "io"
since: "C++23"
---

1) Default constructor. Creates a basic_spanbuf that has no underlying buffer and is opened for both input and output. The pointers to get and put area are set to the null pointer value.

## Declarations
```cpp
basic_spanbuf() : basic_spanbuf(std::ios_base::in | std::ios_base::out) {}
```
_(since C++23)_

```cpp
explicit basic_spanbuf( std::ios_base::openmode which )
: basic_spanbuf(std::span<CharT>{}, which) {}
```
_(since C++23)_

```cpp
explicit basic_spanbuf( std::span<CharT> buf, std::ios_base::openmode which =
std::ios_base::in | std::ios_base::out );
```
_(since C++23)_

```cpp
basic_spanbuf( const basic_spanbuf& ) = delete;
```
_(since C++23)_

```cpp
basic_spanbuf( basic_spanbuf&& rhs );
```
_(since C++23)_

## Parameters
- `buf`: a std::span referencing the underlying buffer
- `rhs`: another basic_spanbuf
- `which`: specifies stream open mode. It is bitmask type, the following constants are defined: Constant Explanation app seek to the end of stream before each write binary open in binary mode in open for reading out open for writing trunc discard the contents of the stream when opening ate seek to the end of stream immediately after open noreplace (C++23) open in exclusive mode

## Notes
These constructors are typically called by the constructors of std::basic_ispanstream, std::basic_ospanstream, and std::basic_spanstream.

## Example
This section is incompleteReason: no example

## See also
- [(constructor)](/cpp/io/basic_ispanstream/basic_ispanstream/)
- [(constructor)](/cpp/io/basic_ospanstream/basic_ospanstream/)
- [(constructor)](/cpp/io/basic_spanstream/basic_spanstream/)
