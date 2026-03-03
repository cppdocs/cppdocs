---
title: "std::basic_istream<CharT,Traits>::gcount"
source_path: "cpp/io/basic_istream/gcount"
category: "io"
---

Returns the number of characters extracted by the last [unformatted input operation](/cpp/named_req/unformattedinputfunction/), or the maximum representable value of [std::streamsize](/cpp/io/streamsize/) if the number is not representable.

## Declarations
```cpp
std::streamsize gcount() const;
```

## Return value
The number of characters extracted by the last unformatted input operation, or the maximum representable value of [std::streamsize](/cpp/io/streamsize/) if the number is not representable.

## Example
```cpp
#include <iostream>
#include <sstream>
 
int main()
{
    char x[20];
    std::istringstream stream("Hello World");
 
    stream.read(x, sizeof x);
    std::cout << "Characters extracted: " << stream.gcount();
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 3464 | C++98 | the return value was unspecified when the result overflows | returns the maximum value |
