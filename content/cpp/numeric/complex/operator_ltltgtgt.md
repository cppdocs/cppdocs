---
title: "operator<<,>>(std::complex)"
source_path: "cpp/numeric/complex/operator"
header: "<complex>"
category: "numeric"
---

1) Writes to os the complex number in the form (real, imaginary).

## Declarations
```cpp
template< class T, class CharT, class Traits >
std::basic_ostream<CharT, Traits>&
operator<<( std::basic_ostream<CharT, Traits>& os, const std::complex<T>& x );
```

```cpp
template< class T, class CharT, class Traits >
std::basic_istream<CharT, Traits>&
operator>>( std::basic_istream<CharT, Traits>& is, std::complex<T>& x );
```

## Parameters
- `os`: a character output stream
- `is`: a character input stream
- `x`: the complex number to be inserted or extracted

## Notes
1) As the comma may be used in the current locale as decimal separator, the output may be ambiguous. This can be solved with std::showpoint which forces the decimal separator to be visible.
2) The input is performed as a series of simple formatted extractions. Whitespace skipping is the same for each of them.

## Example
```cpp
#include <complex>
#include <iostream>
 
int main()
{
    std::cout << std::complex<double> {3.14, 2.71} << '\n';
}
```
