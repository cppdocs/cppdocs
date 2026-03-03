---
title: "std::basic_istream<CharT,Traits>::operator>>"
source_path: "cpp/io/basic_istream/operator"
category: "io"
since: "C++11"
---

Extracts values from an input stream.

## Declarations
```cpp
basic_istream& operator>>( unsigned short& value );
```

```cpp
basic_istream& operator>>( unsigned int& value );
```

```cpp
basic_istream& operator>>( long& value );
```

```cpp
basic_istream& operator>>( unsigned long& value );
```

```cpp
basic_istream& operator>>( long long& value );
```
_(since C++11)_

```cpp
basic_istream& operator>>( unsigned long long& value );
```
_(since C++11)_

```cpp
basic_istream& operator>>( float& value );
```

```cpp
basic_istream& operator>>( double& value );
```

```cpp
basic_istream& operator>>( long double& value );
```

```cpp
basic_istream& operator>>( bool& value );
```

```cpp
basic_istream& operator>>( void*& value );
```

```cpp
basic_istream& operator>>( short& value );
```

```cpp
basic_istream& operator>>( int& value );
```

```cpp
basic_istream& operator>>( /* extended-floating-point-type */& value );
```
_(since C++23)_

```cpp
basic_istream& operator>>( std::ios_base& (*func)(std::ios_base&) );
```

```cpp
basic_istream& operator>>( std::basic_ios<CharT, Traits>&
(*func)(std::basic_ios<CharT, Traits>&) );
```

```cpp
basic_istream& operator>>( basic_istream& (*func)(basic_istream&) );
```

```cpp
basic_istream& operator>>( std::basic_streambuf<CharT, Traits>* sb );
```

## Parameters
- `value`: reference to an integer or floating-point value to store the extracted value to
- `func`: pointer to I/O manipulator function
- `sb`: pointer to the stream buffer to write all the data to

## Notes
For overload ([14](/cpp/io/basic_istream/operator_gtgt/#Version_14)), when the extended floating-point type has a floating-point conversion rank that is not equal to the rank of any standard floating-point type, then double rounding during the conversion can result in inaccurate results. [std::from_chars()](/cpp/utility/from_chars/) can be used in situations where maximum accuracy is important.

## Example
```cpp
#include <iomanip>
#include <iostream>
#include <sstream>
 
int main()
{
    std::string input = "41 3.14 false hello world";
    std::istringstream stream(input);
 
    int n;
    double f;
    bool b;
 
    stream >> n >> f >> std::boolalpha >> b;
    std::cout << "n = " << n << '\n'
              << "f = " << f << '\n'
              << "b = " << std::boolalpha << b << '\n';
 
    // extract the rest using the streambuf overload
    stream >> std::cout.rdbuf();
    std::cout << '\n';
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 64 | C++98 | it was unclear whether overload (18) can only rethrow thestd::ios_base::failure thrown by calling setstate(failbit) | all exceptions caughtcan be rethrown |
| LWG 118 | C++98 | overload (12,13) delegated the extraction to num_get::get,but it does not have overloads for short and int | a long value is extractedinstead of short or int |
| LWG 413 | C++98 | overload (18) only rethrew exceptions thrown while extractingcharacters from sb, but characters are extracted from *this | corrected sb to *this |
| LWG 567 | C++98 | overload (18) behaved as a FormattedInputFunctionbecause of the resolution of LWG issue 60 | it behaves as anUnformattedInputFunction |
| LWG 661 | C++98 | overloads (12,13) did not store the extracted numberto value due to the resolution of LWG issue 118 | stores the number ifno overflow occurs |
| LWG 696 | C++98 | value was unchanged on extraction failure | set to zero or minimum/maximum values |

## See also
- [operator>>(std::basic_istream)](/cpp/io/basic_istream/operator_gtgt2/)
- [operator<<operator>>](/cpp/string/basic_string/operator_ltltgtgt/)
- [operator<<operator>>](/cpp/utility/bitset/operator_ltltgtgt2/)
- [operator<<operator>>](/cpp/numeric/complex/operator_ltltgtgt/)
- [operator<<operator>>](/cpp/numeric/random/linear_congruential_engine/operator_ltltgtgt/)
- [operator<<operator>>](/cpp/numeric/random/uniform_int_distribution/operator_ltltgtgt/)
- [read](/cpp/io/basic_istream/read/)
- [readsome](/cpp/io/basic_istream/readsome/)
- [get](/cpp/io/basic_istream/get/)
- [getline](/cpp/io/basic_istream/getline/)
- [from_chars](/cpp/utility/from_chars/)
