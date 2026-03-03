---
title: "Standard library header <string>"
source_path: "cpp/header/string"
category: "header"
---

This header is part of the [strings](/cpp/string/) library.

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 209 | C++98 | the declarations of the following std::basic_stringmembers used inconsistent styles in the synopsis:
void push_back(CharT c);
basic_string& assign(const basic_string& str);
void swap(basic_string& str); | uniformed the styles |
