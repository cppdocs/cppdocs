---
title: "std::stoul, std::stoull"
source_path: "cpp/string/basic_string/stoul"
header: "<string>"
category: "string"
since: "C++11"
---

Interprets an unsigned integer value in the string str.

## Declarations
```cpp
unsigned long stoul ( const std::string& str,
std::size_t* pos = nullptr, int base = 10 );
```
_(since C++11)_

```cpp
unsigned long stoul ( const std::wstring& str,
std::size_t* pos = nullptr, int base = 10 );
```
_(since C++11)_

```cpp
unsigned long long stoull( const std::string& str,
std::size_t* pos = nullptr, int base = 10 );
```
_(since C++11)_

```cpp
unsigned long long stoull( const std::wstring& str,
std::size_t* pos = nullptr, int base = 10 );
```
_(since C++11)_

## Parameters
- `str`: the string to convert
- `pos`: address of an integer to store the number of characters processed
- `base`: the number base

## Return value
The string converted to the specified unsigned integer type.

## Example
This section is incompleteReason: no example

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 2009 | C++11 | std::out_of_range would not be thrown ifstd::strtoul or std::strtoull sets errno to ERANGE | will throw |

## See also
- [stoistolstoll](/cpp/string/basic_string/stol/)
- [stofstodstold](/cpp/string/basic_string/stof/)
