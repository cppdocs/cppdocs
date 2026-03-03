---
title: "std::basic_ios<CharT,Traits>::move"
source_path: "cpp/io/basic_ios/move"
category: "io"
since: "C++11"
---

Replaces the current state with that of other, except for the associated rdbuf. other is in valid, but unspecified state after the call. After the call to this function, [rdbuf()](/cpp/io/basic_ios/rdbuf/) returns a null pointer, other.rdbuf() returns the same value as before the call, and other.tie() returns a null pointer.

## Declarations
```cpp
protected:
void move( basic_ios& other );
```
_(since C++11)_

```cpp
protected:
void move( basic_ios&& other );
```
_(since C++11)_

## Parameters
- `other`: the basic_ios object to transfer the state from

## Return value
(none)

## See also
- [swap](/cpp/io/basic_ios/swap/)
- [std::basic_ios](/cpp/io/basic_ios/)
