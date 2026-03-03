---
title: "std::basic_ios<CharT,Traits>::bad"
source_path: "cpp/io/basic_ios/bad"
category: "io"
---

Returns true if non-recoverable error has occurred on the associated stream. Specifically, returns true if [badbit](/cpp/io/ios_base/iostate/) is set in rdstate().

## Declarations
```cpp
bool bad() const;
```

## Return value
true if a non-recoverable error has occurred, false otherwise.

## Example
```cpp
#include <cstdlib>
#include <fstream>
#include <iostream>
 
int main()
{
    std::ifstream file("test.txt");
    if (!file) // operator! is used here
    {  
        std::cout << "File opening failed\n";
        return EXIT_FAILURE;
    }
 
    // typical C++ I/O loop uses the return value of the I/O function
    // as the loop controlling condition, operator bool() is used here
    for (int n; file >> n;)
       std::cout << n << ' ';
    std::cout << '\n';
 
    if (file.bad())
        std::cout << "I/O error while reading\n";
    else if (file.eof())
        std::cout << "End of file reached successfully\n";
    else if (file.fail())
        std::cout << "Non-integer data encountered\n";
}
```

## See also
- [basic_ios](/cpp/io/basic_ios/)
- [good()](/cpp/io/basic_ios/good/)
- [fail()](/cpp/io/basic_ios/fail/)
- [ios_base::iostate](/cpp/io/ios_base/iostate/)
- [ios_base::iostate](/cpp/io/ios_base/iostate/)
- [good()](/cpp/io/basic_ios/good/)
- [fail()](/cpp/io/basic_ios/fail/)
- [eof()](/cpp/io/basic_ios/eof/)
- [operator bool](/cpp/io/basic_ios/operator_bool/)
- [operator!](/cpp/io/basic_ios/operator_bool/)
