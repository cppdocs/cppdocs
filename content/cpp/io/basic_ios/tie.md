---
title: "std::basic_ios<CharT,Traits>::tie"
source_path: "cpp/io/basic_ios/tie"
category: "io"
---

Manages the tied stream. A tied stream is an output stream which is synchronized with the sequence controlled by the stream buffer ([rdbuf()](/cpp/io/basic_ios/rdbuf/)), that is, flush() is called on the tied stream before any input/output operation on *this.

## Declarations
```cpp
std::basic_ostream<CharT, Traits>* tie() const;
```

```cpp
std::basic_ostream<CharT, Traits>* tie( std::basic_ostream<CharT, Traits>* str );
```

## Parameters
- `str`: an output stream to set as the tied stream

## Return value
The tied stream, or a null pointer if there was no tied stream.

## Notes
By default, the standard stream [std::cout](/cpp/io/cout/) is tied to [std::cin](/cpp/io/cin/) and [std::cerr](/cpp/io/cerr/). Similarly, its wide counterpart [std::wcout](/cpp/io/cout/) is tied to [std::wcin](/cpp/io/cin/) and [std::wcerr](/cpp/io/cerr/).

## Example
```cpp
#include <fstream>
#include <iomanip>
#include <iostream>
#include <string>
 
int main()
{
    std::ofstream os("test.txt");
    std::ifstream is("test.txt");
    std::string value("0");
 
    os << "Hello";
    is >> value;
 
    std::cout << "Result before tie(): " << std::quoted(value) << "\n";
    is.clear();
    is.tie(&os);
 
    is >> value;
 
    std::cout << "Result after tie(): " << std::quoted(value) << "\n";
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 835 | C++98 | two streams could be tied to each other[1](either directly or through another intermediate stream object) | the behavior is undefined in this case |
