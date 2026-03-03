---
title: "std::basic_filebuf<CharT,Traits>::basic_filebuf"
source_path: "cpp/io/basic_filebuf/basic_filebuf"
category: "io"
since: "C++11"
---

Constructs new std::basic_filebuf object.

## Declarations
```cpp
basic_filebuf();
```

```cpp
basic_filebuf( const std::basic_filebuf& rhs ) = delete;
```
_(since C++11)_

```cpp
basic_filebuf( std::basic_filebuf&& rhs );
```
_(since C++11)_

## Parameters
- `rhs`: another basic_filebuf

## Notes
Typically called by the constructor of [std::basic_fstream](/cpp/io/basic_fstream/).

## Example
This section is incompleteReason: no example

## See also
- [operator=](/cpp/io/basic_filebuf/operator/)
- [(destructor)](/cpp/io/basic_filebuf/~basic_filebuf/)
