---
title: "std::to_string"
source_path: "cpp/string/basic_string/to_string"
header: "<string>"
category: "string"
since: "C++11"
---

Converts a numeric value to [std::string](/cpp/string/basic_string/).

## Declarations
```cpp
std::string to_string( int value );
```
_(since C++11)_

```cpp
std::string to_string( long value );
```
_(since C++11)_

```cpp
std::string to_string( long long value );
```
_(since C++11)_

```cpp
std::string to_string( unsigned value );
```
_(since C++11)_

```cpp
std::string to_string( unsigned long value );
```
_(since C++11)_

```cpp
std::string to_string( unsigned long long value );
```
_(since C++11)_

```cpp
std::string to_string( float value );
```
_(since C++11)_

```cpp
std::string to_string( double value );
```
_(since C++11)_

```cpp
std::string to_string( long double value );
```
_(since C++11)_

## Parameters
- `value`: a numeric value to convert

## Return value
A string holding the converted value.

## Notes
C++17 provides [std::to_chars](/cpp/utility/to_chars/) as a higher-performance locale-independent alternative.

## Example
```cpp
#include <cstdio>
#include <format>
#include <initializer_list>
#include <iostream>
#include <string>
 
#if __cpp_lib_to_string >= 202306L
constexpr auto revision() { return " (post C++26)"; }
#else
constexpr auto revision() { return " (pre C++26)"; }
#endif
 
int main()
{
    for (const double f : {1.23456789555555, 23.43, 1e-9, 1e40, 1e-40, 123456789.0})
    {
        std::cout << "to_string:\t" << std::to_string(f) << revision() << '\n';
 
        // Before C++26, the output of std::to_string matches std::printf.
        std::printf("printf:\t\t%f\n", f);
 
        // As of C++26, the output of std::to_string matches std::format.
        std::cout << std::format("format:\t\t{}\n", f);
 
        std::cout << "std::cout:\t" << f << "\n\n";
    }
}
```

## See also
- [to_wstring](/cpp/string/basic_string/to_wstring/)
- [stoulstoull](/cpp/string/basic_string/stoul/)
- [stoistolstoll](/cpp/string/basic_string/stol/)
- [stofstodstold](/cpp/string/basic_string/stof/)
- [to_chars](/cpp/utility/to_chars/)
