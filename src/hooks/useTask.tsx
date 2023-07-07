import { useQuery } from "@tanstack/react-query";
import { getActiveTasksFromAPI, getTaskByIdFromAPI } from "../requests/task.request";
import { useState } from "react";
import { useParams } from "react-router";

export type tFieldType = "text" | "textarea" | "select" | "file" | undefined

export type tTextInput =
| 'date'
| 'email'
| 'number'
| 'password'
| 'search'
| 'tel'
| 'text'
| 'url'
| 'time'
| 'week'
| 'month'
| 'datetime-local';


export interface iDefaultInput {
    value: string;
    fill: "outline" | "solid";
    placeholder: string;
    labelPlacement: 'start' | 'end' | 'floating' | 'stacked' | 'fixed';
    label: string;
    formControlName: string,
}

export interface iTextInput extends iDefaultInput {
    fieldType: "text"
    type: tTextInput | undefined;
}

export interface iSelectOption {
    value: string,
    label: string
}

export interface iSelectInput extends iDefaultInput{
    fieldType: "select"
    type: "select",
    multiple: boolean,
    options: iSelectOption[]
}

export interface iTextarea extends iDefaultInput {
    fieldType: "textarea"
    type: "textarea"
    autoGrow: boolean;
}

export interface iFileInput {
    fieldType: "file"
    type: "file",
    multiple: boolean,
    value: string,
    label: string,
    placeholder: string
    formControlName: string
}

export type tCustomField = iTextInput | iSelectInput | iTextarea | iFileInput | undefined;

export interface iTask {
    _id?: string
    taskTitle: string,
    taskReward: { currency: string, amount: { $numberDecimal: number } },
    taskDescription: string,
    customFields: tCustomField[],
    taskActiveStatus: boolean
}

export const useTask = () => {

    
    const { data: tasks, isLoading: isTasksLoading } = useQuery({
        queryKey: ["tasks"],
        queryFn: getActiveTasksFromAPI
    })



    return { tasks, isTasksLoading }
}

export default useTask;