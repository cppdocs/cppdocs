---
title: "std::basic_ios<CharT,Traits>::eof"
source_path: "cpp/io/basic_ios/eof"
category: "io"
---

Returns true if the associated stream has reached end-of-file. Specifically, returns true if eofbit is set in [rdstate()](/cpp/io/basic_ios/rdstate/).

## Declarations
```cpp
bool eof() const;
```

## Return value
true if an end-of-file has occurred, false otherwise.

## Notes
This function only reports the stream state as set by the most recent I/O operation; it does not examine the associated data source. For example, if the most recent I/O was a [get()](/cpp/io/basic_istream/get/) which returned the last byte of a file, eof() returns false. The next get() fails to read anything and sets the eofbit. Only then does eof() return true.

In typical usage, input stream processing stops on any error. eof() and [fail()](/cpp/io/basic_ios/fail/) can then be used to distinguish between different error conditions.

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
- [bad()](/cpp/io/basic_ios/bad/)
- [operator bool](/cpp/io/basic_ios/operator_bool/)
- [operator!](/cpp/io/basic_ios/operator_bool/)
- [feof](/cpp/io/c/feof/)
