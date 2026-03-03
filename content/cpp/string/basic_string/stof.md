---
title: "std::stof, std::stod, std::stold"
source_path: "cpp/string/basic_string/stof"
header: "<string>"
category: "string"
since: "C++11"
---

Interprets a floating point value in a string str.

## Declarations
```cpp
float stof ( const std::string& str, std::size_t* pos = nullptr );
```
_(since C++11)_

```cpp
float stof ( const std::wstring& str, std::size_t* pos = nullptr );
```
_(since C++11)_

```cpp
double stod ( const std::string& str, std::size_t* pos = nullptr );
```
_(since C++11)_

```cpp
double stod ( const std::wstring& str, std::size_t* pos = nullptr );
```
_(since C++11)_

```cpp
long double stold( const std::string& str, std::size_t* pos = nullptr );
```
_(since C++11)_

```cpp
long double stold( const std::wstring& str, std::size_t* pos = nullptr );
```
_(since C++11)_

## Parameters
- `str`: the string to convert
- `pos`: address of an integer to store the number of characters processed

## Return value
The string converted to the specified floating point type.

## Example
This section is incompleteReason: no example

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 2009 | C++11 | std::out_of_range would not be thrown if the convertedvalue would fall out of the range of the result type | will throw |
| LWG 2403 | C++11 | stof called std::strtod or std::wcstod | stof calls std::strtof or std::wcstof |

## See also
- [stoistolstoll](/cpp/string/basic_string/stol/)
- [stoulstoull](/cpp/string/basic_string/stoul/)
- [from_chars](/cpp/utility/from_chars/)
