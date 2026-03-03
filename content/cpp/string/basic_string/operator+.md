---
title: "std::operator+(std::basic_string)"
source_path: "cpp/string/basic_string/operator"
header: "<string>"
category: "string"
since: "C++26"
---

Returns a string containing characters from lhs followed by the characters from rhs. Equivalent to:

## Declarations
```cpp
template< class CharT, class Traits, class Alloc >
std::basic_string<CharT,Traits,Alloc>
operator+( const std::basic_string<CharT,Traits,Alloc>& lhs,
const std::basic_string<CharT,Traits,Alloc>& rhs );
```
_(constexpr since C++20)_

```cpp
template< class CharT, class Traits, class Alloc >
std::basic_string<CharT,Traits,Alloc>
operator+( const std::basic_string<CharT,Traits,Alloc>& lhs,
const CharT* rhs );
```
_(constexpr since C++20)_

```cpp
template< class CharT, class Traits, class Alloc >
std::basic_string<CharT,Traits,Alloc>
operator+( const std::basic_string<CharT,Traits,Alloc>& lhs,
CharT rhs );
```
_(constexpr since C++20)_

```cpp
template< class CharT, class Traits, class Alloc >
constexpr std::basic_string<CharT,Traits,Alloc>
operator+( const std::basic_string<CharT,Traits,Alloc>& lhs,
std::type_identity_t<std::basic_string_view<CharT,Traits>> rhs );
```
_(since C++26)_

```cpp
template< class CharT, class Traits, class Alloc >
std::basic_string<CharT,Traits,Alloc>
operator+( const CharT* lhs,
const std::basic_string<CharT,Traits,Alloc>& rhs );
```
_(constexpr since C++20)_

```cpp
template< class CharT, class Traits, class Alloc >
std::basic_string<CharT,Traits,Alloc>
operator+( CharT lhs,
const std::basic_string<CharT,Traits,Alloc>& rhs );
```
_(constexpr since C++20)_

```cpp
template< class CharT, class Traits, class Alloc >
constexpr std::basic_string<CharT,Traits,Alloc>
operator+( std::type_identity_t<std::basic_string_view<CharT,Traits>> lhs,
const std::basic_string<CharT,Traits,Alloc>& rhs );
```
_(since C++26)_

```cpp
template< class CharT, class Traits, class Alloc >
std::basic_string<CharT,Traits,Alloc>
operator+( std::basic_string<CharT,Traits,Alloc>&& lhs,
std::basic_string<CharT,Traits,Alloc>&& rhs );
```
_(since C++11) (constexpr since C++20)_

```cpp
template< class CharT, class Traits, class Alloc >
std::basic_string<CharT,Traits,Alloc>
operator+( std::basic_string<CharT,Traits,Alloc>&& lhs,
const std::basic_string<CharT,Traits,Alloc>& rhs );
```
_(since C++11) (constexpr since C++20)_

```cpp
template< class CharT, class Traits, class Alloc >
std::basic_string<CharT,Traits,Alloc>
operator+( std::basic_string<CharT,Traits,Alloc>&& lhs,
const CharT* rhs );
```
_(since C++11) (constexpr since C++20)_

```cpp
template< class CharT, class Traits, class Alloc >
std::basic_string<CharT,Traits,Alloc>
operator+( std::basic_string<CharT,Traits,Alloc>&& lhs,
CharT rhs );
```
_(since C++11) (constexpr since C++20)_

```cpp
template< class CharT, class Traits, class Alloc >
constexpr std::basic_string<CharT,Traits,Alloc>
operator+( std::basic_string<CharT,Traits,Alloc>&& lhs,
std::type_identity_t<std::basic_string_view<CharT,Traits>> rhs );
```
_(since C++26)_

```cpp
template< class CharT, class Traits, class Alloc >
std::basic_string<CharT,Traits,Alloc>
operator+( const std::basic_string<CharT,Traits,Alloc>& lhs,
std::basic_string<CharT,Traits,Alloc>&& rhs );
```
_(since C++11) (constexpr since C++20)_

```cpp
template< class CharT, class Traits, class Alloc >
std::basic_string<CharT,Traits,Alloc>
operator+( const CharT* lhs,
std::basic_string<CharT,Traits,Alloc>&& rhs );
```
_(since C++11) (constexpr since C++20)_

```cpp
template< class CharT, class Traits, class Alloc >
std::basic_string<CharT,Traits,Alloc>
operator+( CharT lhs,
std::basic_string<CharT,Traits,Alloc>&& rhs );
```
_(since C++11) (constexpr since C++20)_

```cpp
template< class CharT, class Traits, class Alloc >
constexpr std::basic_string<CharT,Traits,Alloc>
operator+( std::type_identity_t<std::basic_string_view<CharT,Traits>> lhs,
std::basic_string<CharT,Traits,Alloc>&& rhs );
```
_(since C++26)_

## Parameters
- `lhs`: string, string view(since C++26), character, or pointer to the first character in a null-terminated array
- `rhs`: string, string view(since C++26), character, or pointer to the first character in a null-terminated array

## Return value
A string containing characters from lhs followed by the characters from rhs, using the allocator determined as above(since C++11).

## Notes
operator+ should be used with great caution when stateful allocators are involved(such as when [std::pmr::string](/cpp/string/basic_string/) is used)(since C++17). Prior to [P1165R1](https://wg21.link/P1165R1), the allocator used for the result was determined by historical accident and can vary from overload to overload for no apparent reason. Moreover, for ([1-5](#Version_1)), the allocator propagation behavior varies across major standard library implementations and differs from the behavior depicted in the standard.

Because the allocator used by the result of operator+ is sensitive to value category, operator+ is not associative with respect to allocator propagation:

For a chain of operator+ invocations, the allocator used for the ultimate result may be controlled by prepending an rvalue basic_string with the desired allocator:

For better and portable control over allocators, member functions like [append](/cpp/string/basic_string/append/), [insert](/cpp/string/basic_string/insert/), and [operator+=]() should be used on a result string constructed with the desired allocator.

## Example
```cpp
#include <iostream>
#include <string>
#include <string_view>
 
int main()
{
    std::string s1 = "Hello";
    std::string s2 = "world";
    const char* end = "!\n";
    std::cout << s1 + ' ' + s2 + end;
 
    std::string_view water{" Water"};
    #if __cpp_lib_string_view >= 202403
    std::cout << s1 + water + s2 << end; // overload (4), then (1)
    #else
    std::cout << s1 + std::string(water) + s2 << end; // OK, but less efficient
    #endif
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| P1165R1 | C++11 | allocator propagation is haphazard and inconsistent | made more consistent |

## See also
- [operator+=]()
- [append](/cpp/string/basic_string/append/)
- [insert](/cpp/string/basic_string/insert/)
