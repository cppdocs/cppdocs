---
title: "std::basic_format_context"
source_path: "cpp/utility/format/basic_format_context"
header: "<format>"
category: "utility"
since: "C++20"
---

Provides access to formatting state consisting of the formatting arguments and the output iterator.

## Declarations
```cpp
template< class OutputIt, class CharT >
class basic_format_context;
```
_(since C++20)_

```cpp
using format_context = basic_format_context</* unspecified */, char>;
```
_(since C++20)_

```cpp
using wformat_context = basic_format_context</* unspecified */, wchar_t>;
```
_(since C++20)_

## Example
This section is incompleteReason: no example

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 3567 | C++20 | basic_format_context does not work move-only iterator types | made to move iterators |
| LWG 3975 | C++20 | user specialization of basic_format_context was allowed | disallowed |
| LWG 4061 | C++20 | basic_format_context was constructible and assignable by user code | made neither constructible nor assignable |
