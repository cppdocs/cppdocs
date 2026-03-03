---
title: "std::ctype<char>::is"
source_path: "cpp/locale/ctype_char/is"
header: "<locale>"
category: "locale"
---

1) Checks if the character c is classified by the mask m according to the classification table returned by the member function table(). Effectively calculates table()[(unsigned char)c] & m.

## Declarations
```cpp
bool is( mask m, char c ) const;
```

```cpp
const char* is( const char* low, const char* high, mask* vec ) const;
```

## Parameters
- `c`: character to classify
- `m`: mask to use for classifying a single character
- `low`: pointer to the first character in an array of characters to classify
- `high`: one past the end pointer for the array of characters to classify
- `vec`: pointer to the first element of the array of masks to fill

## Notes
Unlike the primary template [std::ctype](/cpp/locale/ctype/), this specialization does not perform a virtual function call when classifying characters. To customize the behavior, a derived class may provide a non-default classification table to the base class constructor.

## Example
This section is incompleteReason: no example

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 28 | C++98 | overload (2) copied the values from vec into table(),which is the reverse of the intended behavior | corrected |

## See also
- [do_is](/cpp/locale/ctype/is/)
