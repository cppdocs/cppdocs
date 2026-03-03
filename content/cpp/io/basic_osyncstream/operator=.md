---
title: "std::basic_osyncstream<CharT,Traits,Allocator>::operator="
source_path: "cpp/io/basic_osyncstream/operator"
category: "io"
since: "C++20"
---

Move-assigns a synchronized output stream:

## Declarations
```cpp
basic_osyncstream& operator=( std::basic_osyncstream&& other );
```
_(since C++20)_

## Parameters
- `other`: another synchronized output stream to move from

## Return value
*this

## Example
```cpp
#include <iomanip>
#include <iostream>
#include <sstream>
#include <syncstream>
#include <utility>
 
int main()
{
    std::osyncstream out(std::cout);
    out << "test\n";
    std::ostringstream str_out;
    std::osyncstream{str_out} = std::move(out); // Note that out is emitted here
    std::cout << "str_out = " << std::quoted(str_out.view()) << '\n';
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 3867 | C++20 | the move assignment operator was noexcept, butstd::basic_syncbuf's move assignment operator is not | removed noexcept |

## See also
- [(constructor)](/cpp/io/basic_osyncstream/basic_osyncstream/)
- [(destructor)](/cpp/io/basic_osyncstream/~basic_osyncstream/)
- [emit](/cpp/io/basic_osyncstream/emit/)
- [emit()](/cpp/io/basic_syncbuf/emit/)
