package com.akram.task.department;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class Department {

	private @Id @GeneratedValue Long id;
	private String name;
	private Long managerId;

	public Department() {
	}

	public Department(String name, Long managerId) {
		this.setName(name);
		this.setManagerId(managerId);
	}

	/**
	 * @return the name
	 */
	public String getName() {
		return name;
	}

	/**
	 * @param name the name to set
	 */
	public void setName(String name) {
		this.name = name;
	}

	/**
	 * @return the managerId
	 */
	public Long getManagerId() {
		return managerId;
	}

	/**
	 * @param managerId the managerId to set
	 */
	public void setManagerId(Long managerId) {
		this.managerId = managerId;
	}
}

//( department_id NUMBER(4)
//		   , department_name VARCHAR2(30)
//		   , manager_id NUMBER(6)
//		   ) ;
//		   
