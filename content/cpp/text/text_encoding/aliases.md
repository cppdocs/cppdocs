---
title: "std::text_encoding::aliases"
source_path: "cpp/text/text_encoding/aliases"
category: "text"
since: "C++26"
---

Returns a non-empty range of type [text_encoding::aliases_view](/cpp/text/text_encoding/aliases_view/) containing the aliases of *this if it represents a known registered character encoding. Otherwise, returns an empty range of type text_encoding::aliases_view.

## Declarations
```cpp
constexpr aliases_view aliases() const noexcept;
```
_(since C++26)_

## Return value
A [view](/cpp/ranges/view/) containing aliases of the known registered character encoding represented by *this; otherwise an empty range.

## Example
This section is incompleteReason: no example
