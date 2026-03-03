---
title: "std::basic_ios<CharT,Traits>::swap"
source_path: "cpp/io/basic_ios/swap"
category: "io"
since: "C++11"
---

Exchanges the states of *this and other, except for the associated rdbuf objects. [rdbuf()](/cpp/io/basic_ios/rdbuf/) and other.rdbuf() returns the same values as before the call.

## Declarations
```cpp
protected:
void swap( basic_ios& other ) noexcept;
```
_(since C++11)_

## Parameters
- `other`: the basic_ios object to exchange the state with

## See also
- [move](/cpp/io/basic_ios/move/)
- [std::basic_ios](/cpp/io/basic_ios/)
