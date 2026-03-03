---
title: "std::basic_iostream<CharT,Traits>::swap"
source_path: "cpp/io/basic_iostream/swap"
category: "io"
since: "C++11"
---

Exchanges the state with another input/output stream object. Effectively calls basic_istream<CharT,Traits>::swap(other).

## Declarations
```cpp
protected:
void swap( basic_iostream& other );
```
_(since C++11)_

## Parameters
- `other`: another stream to exchange the state with

## Return value
*this
