---
title: "std::istrstream::istrstream"
source_path: "cpp/io/istrstream/istrstream"
category: "io"
---

Constructs new [std::istrstream](/cpp/io/istrstream/) and its underlying [std::strstreambuf](/cpp/io/strstreambuf/).

## Declarations
```cpp
explicit istrstream( const char* s );
```
_(deprecated in C++98) (removed in C++26)_

```cpp
explicit istrstream( char* s );
```
_(deprecated in C++98) (removed in C++26)_

```cpp
istrstream( const char* s, std::streamsize n );
```
_(deprecated in C++98) (removed in C++26)_

```cpp
istrstream( char* s, std::streamsize n );
```
_(deprecated in C++98) (removed in C++26)_

## Parameters
- `s`: C-string or char array to use as the contents of the stream
- `n`: size of the array

## Example
```cpp
#include <iostream>
#include <strstream>
 
int main()
{
    std::istrstream s1("1 2 3"); // string literal
    int n1, n2, n3;
    if (s1 >> n1 >> n2 >> n3)
        std::cout << n1 << ", " << n2 << ", " << n3 << '\n';
 
    char arr[] = {'4', ' ', '5', ' ', '6'};
    std::istrstream s2(arr, sizeof arr);
    if (s2 >> n1 >> n2 >> n3)
        std::cout << n1 << ", " << n2 << ", " << n3 << '\n';
}
```

## See also
- [(constructor)](/cpp/io/strstreambuf/strstreambuf/)
- [(constructor)](/cpp/io/ostrstream/ostrstream/)
- [(constructor)](/cpp/io/strstream/strstream/)
