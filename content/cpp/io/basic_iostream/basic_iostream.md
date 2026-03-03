---
title: "std::basic_iostream<CharT,Traits>::basic_iostream"
source_path: "cpp/io/basic_iostream/basic_iostream"
category: "io"
since: "C++11"
---

Constructs new stream object.

## Declarations
```cpp
explicit basic_iostream( std::basic_streambuf<CharT,Traits>* sb );
```

```cpp
basic_iostream( const basic_iostream& other ) = delete;
```
_(since C++11)_

```cpp
protected:
basic_iostream( basic_iostream&& other );
```
_(since C++11)_

## Parameters
- `sb`: streambuf to initialize with
- `other`: another stream to initialize with

## See also
- [operator=](/cpp/io/basic_iostream/operator/)
