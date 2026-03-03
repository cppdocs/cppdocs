---
title: "std::ostreambuf_iterator<CharT,Traits>::failed"
source_path: "cpp/iterator/ostreambuf_iterator/failed"
category: "iterator"
since: "C++11"
---

Returns true if the iterator encountered the end-of-file condition, that is, if an earlier call to [std::basic_streambuf::sputc](/cpp/io/basic_streambuf/sputc/) (made by [operator=](/cpp/iterator/ostreambuf_iterator/operator/)) returned Traits::eof.

## Declarations
```cpp
bool failed() const throw();
```
_(until C++11)_

```cpp
bool failed() const noexcept;
```
_(since C++11)_

## Return value
true if this iterator has encountered the end-of-file condition on output, false otherwise.

## Example
This section is incompleteReason: no example
