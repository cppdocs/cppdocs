---
title: "std::basic_ios<CharT,Traits>::good"
source_path: "cpp/io/basic_ios/good"
category: "io"
---

Returns true if the most recent I/O operation on the stream completed successfully. Specifically, returns result of rdstate() == 0.

## Declarations
```cpp
bool good() const;
```

## Return value
true if the stream error flags are all false, false otherwise.

## Example
```cpp
#include <cstdlib>
#include <fstream>
#include <iostream>
 
int main()
{
    const char* fname = "/tmp/test.txt";
    std::ofstream ofile{fname};
    ofile << "10 " << "11 " << "12 " << "non-int";
    ofile.close();
 
    std::ifstream file{fname};
    if (!file.good())  
    {  
        std::cout << "#1. Opening file test.txt failed - "
                     "one of the error flags is true\n";
        return EXIT_FAILURE;
    }
 
    // typical C++ I/O loop uses the return value of the I/O function
    // as the loop controlling condition, operator bool() is used here
    for (int n; file >> n;)
        std::cout << n << ' ';
    std::cout << '\n';
 
    if (file.bad()) 
    {
        std::cout << "#2. I/O error while reading - badbit is true\n";
        return EXIT_FAILURE;
    } 
    else if (file.eof())
        std::cout << "#3. End of file reached successfully - eofbit is true\n"
            "This is fine even though file.good() is false\n"; 
    else if (file.fail())
        std::cout << "#4. Non-integer data encountered - failbit is true\n";
}
```

## See also
- [basic_ios](/cpp/io/basic_ios/)
- [fail()](/cpp/io/basic_ios/fail/)
- [ios_base::iostate](/cpp/io/ios_base/iostate/)
- [ios_base::iostate](/cpp/io/ios_base/iostate/)
- [fail()](/cpp/io/basic_ios/fail/)
- [bad()](/cpp/io/basic_ios/bad/)
- [eof()](/cpp/io/basic_ios/eof/)
- [operator bool](/cpp/io/basic_ios/operator_bool/)
- [operator!](/cpp/io/basic_ios/operator_bool/)
