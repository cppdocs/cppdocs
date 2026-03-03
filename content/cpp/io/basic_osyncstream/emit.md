---
title: "std::basic_osyncstream<CharT,Traits,Allocator>::emit"
source_path: "cpp/io/basic_osyncstream/emit"
category: "io"
since: "C++20"
---

Emits all buffered output and executes any pending flushes, by calling [emit()](/cpp/io/basic_syncbuf/emit/) on the underlying [std::basic_syncbuf](/cpp/io/basic_syncbuf/).

## Declarations
```cpp
void emit();
```

## Example
```cpp
#include <iostream>
#include <syncstream>
 
int main()
{
    {
        std::osyncstream bout(std::cout);
        bout << "Hello," << '\n'; // no flush
        bout.emit(); // characters transferred; cout not flushed
        bout << "World!" << std::endl; // flush noted; cout not flushed
        bout.emit(); // characters transferred; cout flushed
        bout << "Greetings." << '\n'; // no flush
    } // destructor calls emit(): characters transferred; cout not flushed
 
    // emit can be used for local exception-handling on the wrapped stream
    std::osyncstream bout(std::cout);
    bout << "Hello, " << "World!" << '\n';
    try
    {
        bout.emit();
    }
    catch (...)
    {
        // handle exceptions
    }
}
```

## See also
- [(destructor)](/cpp/io/basic_osyncstream/~basic_osyncstream/)
- [emit](/cpp/io/basic_syncbuf/emit/)
