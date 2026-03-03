---
title: "std::basic_istream<CharT,Traits>::sentry"
source_path: "cpp/io/basic_istream/sentry"
category: "io"
---

An object of class basic_istream::sentry is constructed in local scope at the beginning of each member function of [std::basic_istream](/cpp/io/basic_istream/) that performs input (both formatted and unformatted). Its constructor prepares the input stream: checks if the stream is already in a failed state, flushes the tie()'d output streams, skips leading whitespace unless noskipws flag is set, and performs other implementation-defined tasks if necessary. All cleanup, if necessary, is performed in the destructor, so that it is guaranteed to happen if exceptions are thrown during input.

## Declarations
```cpp
class sentry;
```

## Parameters
- `is`: input stream to prepare
- `noskipws`: true if whitespace should not be skipped

## Return value
true if the initialization of the input stream was successful, false otherwise.

## Example
```cpp
#include <iostream>
#include <sstream>
 
struct Foo
{
    char n[5];
};
 
std::istream& operator>>(std::istream& is, Foo& f)
{
    std::istream::sentry s(is);
    if (s)
        is.read(f.n, 5);
    return is;
}
 
int main()
{
    std::string input = "   abcde";
    std::istringstream stream(input);
    Foo f;
    stream >> f;
    std::cout.write(f.n, 5);
    std::cout << '\n';
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 195 | C++98 | it was unclear whether the constructor would set eofbit | made clear |
| LWG 419 | C++98 | the constructor did not set failbit if eofbit has been set | sets failbit in this case |

## See also
- [operator>>](/cpp/io/basic_istream/operator_gtgt/)
- [operator>>(std::basic_istream)](/cpp/io/basic_istream/operator_gtgt2/)
