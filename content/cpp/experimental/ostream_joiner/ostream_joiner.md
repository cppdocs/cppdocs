---
title: "std::experimental::ostream_joiner<DelimT,CharT,Traits>::ostream_joiner"
source_path: "cpp/experimental/ostream_joiner/ostream_joiner"
category: "experimental"
---

1) Constructs the iterator with the private ostream_type* member initialized with [std::addressof](/cpp/memory/addressof/)(stream), the private delimiter member initialized with delimiter, and the private "first element" flag set to true.

## Declarations
```cpp
ostream_joiner( ostream_type& stream, const DelimT& delimiter );
```
_(library fundamentals TS v2)_

```cpp
ostream_joiner( ostream_type& stream, DelimT&& delimiter );
```
_(library fundamentals TS v2)_

```cpp
ostream_joiner( const ostream_joiner& other ) = default;
```
_(library fundamentals TS v2) (implicitly declared)_

```cpp
ostream_joiner( ostream_joiner&& other ) = default;
```
_(library fundamentals TS v2) (implicitly declared)_

## Parameters
- `stream`: the output stream to be accessed by this iterator
- `delimiter`: the delimiter to be inserted into the stream in between two outputs
- `other`: the ostream_joiner object from which this object is to be copy- or move-constructed

## Example
This section is incompleteReason: no example
