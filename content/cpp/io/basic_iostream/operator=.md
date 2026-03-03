---
title: "std::basic_iostream<CharT,Traits>::operator="
source_path: "cpp/io/basic_iostream/operator"
category: "io"
since: "C++11"
---

Assigns another stream object.

## Declarations
```cpp
basic_iostream& operator=( const basic_iostream& other ) = delete;
```

```cpp
protected:
basic_iostream& operator=( basic_iostream&& other );
```
_(since C++11)_

## Parameters
- `other`: another stream to assign state of

## Return value
*this

## See also
- [(constructor)](/cpp/io/basic_iostream/basic_iostream/)
