---
title: "std::num_get<CharT,InputIt>::get, std::num_get<CharT,InputIt>::do_get"
source_path: "cpp/locale/num_get/get"
category: "locale"
since: "C++11"
---

1) Public member function, calls the member function do_get of the most derived class.

## Declarations
```cpp
public:
iter_type get( iter_type in, iter_type end, std::ios_base& str,
std::ios_base::iostate& err, bool& v ) const;
```

```cpp
iter_type get( iter_type in, iter_type end, std::ios_base& str,
std::ios_base::iostate& err, long& v ) const;
```

```cpp
iter_type get( iter_type in, iter_type end, std::ios_base& str,
std::ios_base::iostate& err, long long& v ) const;
```
_(since C++11)_

```cpp
iter_type get( iter_type in, iter_type end, std::ios_base& str,
std::ios_base::iostate& err, unsigned short& v ) const;
```

```cpp
iter_type get( iter_type in, iter_type end, std::ios_base& str,
std::ios_base::iostate& err, unsigned int& v ) const;
```

```cpp
iter_type get( iter_type in, iter_type end, std::ios_base& str,
std::ios_base::iostate& err, unsigned long& v ) const;
```

```cpp
iter_type get( iter_type in, iter_type end, std::ios_base& str,
std::ios_base::iostate& err, unsigned long long& v ) const;
```
_(since C++11)_

```cpp
iter_type get( iter_type in, iter_type end, std::ios_base& str,
std::ios_base::iostate& err, float& v ) const;
```

```cpp
iter_type get( iter_type in, iter_type end, std::ios_base& str,
std::ios_base::iostate& err, double& v ) const;
```

```cpp
iter_type get( iter_type in, iter_type end, std::ios_base& str,
std::ios_base::iostate& err, long double& v ) const;
```

```cpp
iter_type get( iter_type in, iter_type end, std::ios_base& str,
std::ios_base::iostate& err, void*& v ) const;
```

```cpp
protected:
virtual iter_type do_get( iter_type in, iter_type end, std::ios_base& str,
std::ios_base::iostate& err, bool& v ) const;
```

```cpp
virtual iter_type do_get( iter_type in, iter_type end, std::ios_base& str,
std::ios_base::iostate& err, long& v ) const;
```

```cpp
virtual iter_type do_get( iter_type in, iter_type end, std::ios_base& str,
std::ios_base::iostate& err, long long& v ) const;
```
_(since C++11)_

```cpp
virtual iter_type do_get( iter_type in, iter_type end, std::ios_base& str,
std::ios_base::iostate& err, unsigned short& v ) const;
```

```cpp
virtual iter_type do_get( iter_type in, iter_type end, std::ios_base& str,
std::ios_base::iostate& err, unsigned int& v ) const;
```

```cpp
virtual iter_type do_get( iter_type in, iter_type end, std::ios_base& str,
std::ios_base::iostate& err, unsigned long& v ) const;
```

```cpp
virtual iter_type do_get( iter_type in, iter_type end, std::ios_base& str,
std::ios_base::iostate& err,
unsigned long long& v ) const;
```
_(since C++11)_

```cpp
virtual iter_type do_get( iter_type in, iter_type end, std::ios_base& str,
std::ios_base::iostate& err, float& v ) const;
```

```cpp
virtual iter_type do_get( iter_type in, iter_type end, std::ios_base& str,
std::ios_base::iostate& err, double& v ) const;
```

```cpp
virtual iter_type do_get( iter_type in, iter_type end, std::ios_base& str,
std::ios_base::iostate& err, long double& v ) const;
```

```cpp
virtual iter_type do_get( iter_type in, iter_type end, std::ios_base& str,
std::ios_base::iostate& err, void*& v ) const;
```

## Return value
in

## Notes
Before the resolutions of [LWG issue 23](https://cplusplus.github.io/LWG/issue23) and [LWG issue 696](https://cplusplus.github.io/LWG/issue696), v was left unchanged if an error occurs.

Before the resolution of [LWG issue 221](https://cplusplus.github.io/LWG/issue221), strings representing hexadecimal integers (e.g. "0xA0") were rejected by do_get(int) even if they are valid input to [strtol](/cpp/string/byte/strtol/) because stage 2 filters out characters 'X' and 'x'.

Before the resolution of [LWG issue 1169](https://cplusplus.github.io/LWG/issue1169), converting a negative number string into an unsigned integer might produce zero (since the value represented by the string is smaller than what the target type can represent).

Before the resolution of [LWG issue 2381](https://cplusplus.github.io/LWG/issue2381), strings representing hexadecimal floating-point numbers with exponents (e.g. "0x1.23p-10") were rejected by do_get(double) even if they are valid input to [strtod](/cpp/string/byte/strtof/) because stage 2 filters out characters 'P' and 'p'.

The strings representing infinity or not-a-number (e.g. "NaN" and "inf") are rejected by do_get(double) even if they are valid input to strtod because stage 2 filters out characters such as 'N' or 'i'.

## Example
```cpp
#include <iostream>
#include <iterator>
#include <locale>
 
struct base { long x; };
 
template<class CharT, class Traits>
std::basic_istream<CharT, Traits>&
    operator >>(std::basic_istream<CharT, Traits>& is, base& b)
{
    std::ios_base::iostate err = std::ios_base::goodbit;
 
    try // setting err could throw
    {
        typename std::basic_istream<CharT, Traits>::sentry s(is);
 
        if (s) // if stream is ready for input
            std::use_facet<std::num_get<CharT>>(is.getloc()).get(is, {}, is, err, b.x);
    }
    catch (std::ios_base::failure& error)
    {
        // handle the exception
    }
 
    return is;
}
 
int main()
{
    base b;
    std::cin >> b;
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 17 | C++98 | the process of parsing text boolean values was errornous | corrected |
| LWG 18 | C++98 | the overload of get taking bool& value was missing | added |
| LWG 23 | C++98 | overflowing input resulted in undefined behavior | overflow handled |
| LWG 154 | C++98 | the conversion specifier for double was %g (same as float) | changed to %lg |
| LWG 221 | C++98 | do_get did not parse 'x' and 'X' while strtol parsed them | made 'x' and 'X' parsed |
| LWG 275 | C++98 | get had an overload taking short& value instead of float& | corrected |
| LWG 358 | C++98 | thousand separators after the decimal point were ignored | stage 2 is terminated if encountered |
| LWG 696 | C++98 | the result was unchanged on conversion failure | set to zero |
| LWG 1169 | C++98 | overflow handling was inconsistent between floating-point types | made consistentwith strtof/strtod |
| LWG 2381 | C++11 | do_get did not parse 'p' and 'P' while strtod parsed them | made 'p' and 'P' parsed |

## See also
- [operator>>](/cpp/io/basic_istream/operator_gtgt/)
