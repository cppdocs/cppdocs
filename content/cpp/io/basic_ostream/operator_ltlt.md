---
title: "std::basic_ostream<CharT,Traits>::operator<<"
source_path: "cpp/io/basic_ostream/operator"
category: "io"
since: "C++11"
---

Inserts data into the stream.

## Declarations
```cpp
basic_ostream& operator<<( bool value );
```

```cpp
basic_ostream& operator<<( long value );
```

```cpp
basic_ostream& operator<<( unsigned long value );
```

```cpp
basic_ostream& operator<<( long long value );
```
_(since C++11)_

```cpp
basic_ostream& operator<<( unsigned long long value );
```
_(since C++11)_

```cpp
basic_ostream& operator<<( double value );
```

```cpp
basic_ostream& operator<<( long double value );
```

```cpp
basic_ostream& operator<<( const void* value );
```

```cpp
basic_ostream& operator<<( const volatile void* value );
```
_(since C++23)_

```cpp
basic_ostream& operator<<( std::nullptr_t );
```
_(since C++17)_

```cpp
basic_ostream& operator<<( short value );
```

```cpp
basic_ostream& operator<<( int value );
```

```cpp
basic_ostream& operator<<( unsigned short value );
```

```cpp
basic_ostream& operator<<( unsigned int value );
```

```cpp
basic_ostream& operator<<( float value );
```

```cpp
basic_ostream& operator<<( /* extended-floating-point-type */ value );
```
_(since C++23)_

```cpp
basic_ostream& operator<<( std::basic_streambuf<CharT, Traits>* sb );
```

```cpp
basic_ostream& operator<<(
std::ios_base& (*func)(std::ios_base&) );
```

```cpp
basic_ostream& operator<<(
std::basic_ios<CharT, Traits>& (*func)(std::basic_ios<CharT, Traits>&) );
```

```cpp
basic_ostream& operator<<(
std::basic_ostream<CharT, Traits>& (*func)
(std::basic_ostream<CharT, Traits>&) );
```

## Parameters
- `value`: integer, floating-point, boolean, or pointer value to insert
- `func`: function to call
- `sb`: pointer to the stream buffer to read the data from

## Notes
There are no overloads for pointers to non-static members, pointers to volatiles,(until C++23) or function pointers (other than the ones with signatures accepted by the ([18-20](/cpp/io/basic_ostream/operator_ltlt/#Version_18)) overloads).

Character and character string arguments (e.g., of type char or const char*) are handled by the [non-member overloads](/cpp/io/basic_ostream/operator_ltlt2/) of operator<<.

Overload (10) was added by the resolution of [LWG issue 2221](https://cplusplus.github.io/LWG/issue2221), but it is never implemented in any standard library implementation under C++11/14 modes.

## Example
```cpp
#include <iomanip>
#include <iostream>
#include <sstream>
 
int fun() { return 42; }
 
int main()
{
    std::istringstream input(" \"Some text.\" ");
    double f = 3.14;
    bool b = true;
 
    std::cout
        << fun()          // int overload (12)
        << ' '            // non-member overload
        << std::boolalpha // function overload (18)
        << b              // bool overload (1)
        << " "            // non-member overload
        << std::fixed     // function overload (18) again
        << f              // double overload (6)
        << input.rdbuf()  // streambuf overload
        << fun            // bool overload (1): there's no overload for int(*)()
        << std::endl;     // function overload (18) again
 
    int x = 0;
    int* p1 = &x;
    volatile int* p2 = &x;
    std::cout
        << "p1: " << p1 << '\n'  // `const void*` overload, prints address
        << "p2: " << p2 << '\n'; // before C++23 (P1147): bool overload :), because
            // operator<<(const void*) is not a match, as it discards the `volatile`
            // qualifier. To fix this, C++23 adds `const volatile void*` overload (9),
            // that prints the address as expected.
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 117 | C++98 | overloads (1-8,11-15) delegated the insertion tonum_put::put, but it does not have overloads for short,unsigned short, int, unsigned int, and float | they are convertedbefore being passedto num_put::put |
| LWG 567 | C++98 | overload (17) behaved as a FormattedOutputFunctionbecause of the resolution of LWG issue 60 | it behaves as anUnformattedOutputFunction |

## See also
- [operator<<(std::basic_ostream)](/cpp/io/basic_ostream/operator_ltlt2/)
- [operator<<operator>>](/cpp/string/basic_string/operator_ltltgtgt/)
- [operator<<](/cpp/string/basic_string_view/operator_ltlt/)
- [operator<<operator>>](/cpp/utility/bitset/operator_ltltgtgt2/)
- [operator<<operator>>](/cpp/numeric/complex/operator_ltltgtgt/)
- [operator<<operator>>](/cpp/numeric/random/linear_congruential_engine/operator_ltltgtgt/)
- [operator<<operator>>](/cpp/numeric/random/uniform_int_distribution/operator_ltltgtgt/)
- [put](/cpp/io/basic_ostream/put/)
- [write](/cpp/io/basic_ostream/write/)
- [to_chars](/cpp/utility/to_chars/)
