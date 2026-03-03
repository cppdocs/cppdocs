---
title: "std::ranges::range"
source_path: "cpp/ranges/range"
header: "<ranges>"
category: "ranges"
since: "C++20"
---

The range concept defines the requirements of a type that allows iteration over its elements by providing an iterator and sentinel that denote the elements of the range.

## Declarations
```cpp
template< class T >
concept range = requires( T& t ) {
ranges::begin(t); // equality-preserving for forward iterators
ranges::end (t);
};
```
_(since C++20)_

## Notes
A typical range class only needs to provide two functions:

Alternatively, they can be non-member functions, to be found by [argument-dependent lookup](/cpp/language/adl/).

## Example
```cpp
#include <ranges>
 
// A minimum range
struct SimpleRange
{
    int* begin();
    int* end();
};
static_assert(std::ranges::range<SimpleRange>);
 
// Not a range: no begin/end
struct NotRange
{
    int t {};
};
static_assert(!std::ranges::range<NotRange>);
 
// Not a range: begin does not return an input_or_output_iterator
struct NotRange2
{
    void* begin();
    int* end();
};
static_assert(!std::ranges::range<NotRange2>);
 
int main() {}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 3915 | C++20 | ranges::begin(t) and ranges::end(t)did not require implicit expression variations | removed theredundant description |
