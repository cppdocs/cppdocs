---
title: "std::to_wstring"
source_path: "cpp/string/basic_string/to_wstring"
header: "<string>"
category: "string"
since: "C++11"
---

Converts a numeric value to [std::wstring](/cpp/string/basic_string/).

## Declarations
```cpp
std::wstring to_wstring( int value );
```
_(since C++11)_

```cpp
std::wstring to_wstring( long value );
```
_(since C++11)_

```cpp
std::wstring to_wstring( long long value );
```
_(since C++11)_

```cpp
std::wstring to_wstring( unsigned value );
```
_(since C++11)_

```cpp
std::wstring to_wstring( unsigned long value );
```
_(since C++11)_

```cpp
std::wstring to_wstring( unsigned long long value );
```
_(since C++11)_

```cpp
std::wstring to_wstring( float value );
```
_(since C++11)_

```cpp
std::wstring to_wstring( double value );
```
_(since C++11)_

```cpp
std::wstring to_wstring( long double value );
```
_(since C++11)_

## Parameters
- `value`: a numeric value to convert

## Return value
A wide string holding the converted value.

## Example
```cpp
#include <iostream>
#include <string>
 
int main()
{
    for (const double f : {23.43, 1e-9, 1e40, 1e-40, 123456789.0})
        std::wcout << "std::wcout: " << f << '\n'
                   << "to_wstring: " << std::to_wstring(f) << "\n\n";
}
```

## See also
- [to_string](/cpp/string/basic_string/to_string/)
