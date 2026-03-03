---
title: "std::istreambuf_iterator<CharT,Traits>::operator*"
source_path: "cpp/iterator/istreambuf_iterator/operator"
category: "iterator"
---

Reads a single character by calling sbuf_->sgetc() where sbuf_ is the stored pointer to the stream buffer.

## Declarations
```cpp
CharT operator*() const;
```

## Return value
The value of the obtained character.
