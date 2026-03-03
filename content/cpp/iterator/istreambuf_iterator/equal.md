---
title: "std::istreambuf_iterator<CharT,Traits>::equal"
source_path: "cpp/iterator/istreambuf_iterator/equal"
category: "iterator"
---

Checks whether both *this and it are valid, or both are invalid, regardless of the stream buffer objects they use.

## Declarations
```cpp
bool equal( const istreambuf_iterator& it ) const;
```

## Parameters
- `it`: another stream buffer iterator to compare to

## Return value
true if both *this and it are valid, or both are invalid, false otherwise.

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 110 | C++98 | the signature was bool equal(istreambuf_iterator& it) | consts added |
| LWG 1126 | C++98 | LWG issue 110 was not properly resolved, leavingthe parameter type as istreambuf_iterator& | const added |
