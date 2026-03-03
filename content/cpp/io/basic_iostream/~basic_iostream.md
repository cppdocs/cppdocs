---
title: "std::basic_iostream<CharT,Traits>::~basic_iostream"
source_path: "cpp/io/basic_iostream/~basic_iostream"
category: "io"
---

Destructs the input/output stream.

## Declarations
```cpp
virtual ~basic_iostream();
```

## Notes
This destructor does not perform any operation on the underlying stream buffer (rdbuf()): the destructors of the derived streams such as [std::basic_fstream](/cpp/io/basic_fstream/) and [std::basic_stringstream](/cpp/io/basic_stringstream/) are responsible for calling the destructors of the stream buffers.
