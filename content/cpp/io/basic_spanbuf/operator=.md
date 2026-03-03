---
title: "std::basic_spanbuf<CharT,Traits>::operator="
source_path: "cpp/io/basic_spanbuf/operator"
category: "io"
since: "C++23"
---

1) Move assignment operator. Equivalent to auto tmp{std::move(rhs)}; this->swap(tmp); return *this;. After move assignment, *this holds the state rhs held before move assignment. It is implementation-defined whether rhs still hold the underlying buffer after move assignment.

## Declarations
```cpp
basic_spanbuf& operator=( basic_spanbuf&& rhs );
```
_(since C++23)_

```cpp
basic_spanbuf& operator( const basic_spanbuf& ) = delete;
```
_(since C++23)_

## Parameters
- `rhs`: another basic_spanbuf that will be moved from

## Return value
*this

## Example
This section is incompleteReason: no example

## See also
- [(constructor)](/cpp/io/basic_spanbuf/basic_spanbuf/)
- [swap](/cpp/io/basic_spanbuf/swap/)
